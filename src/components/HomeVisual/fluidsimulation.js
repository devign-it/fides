import * as THREE from "three";

export default function FluidSimulation(elementToAppend) {
    class App {
        constructor() {
            // Full credits go to @Vaalentin https://codepen.io/vaalentin/pen/MKMmXG
            let container;
            let scene;
            let camera;
            let renderer;
            let material;
            let mouseX = 0,
                mouseY = 0;

            // let windowHalfX = window.innerWidth / 2;
            // let windowHalfY = window.innerHeight / 2;

            function onResize() {
                const { offsetWidth: width, offsetHeight: height } = container;

                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }

            function setup() {
                container = document.querySelector(".canvas--background");
                scene = new THREE.Scene();

                const { offsetWidth: width, offsetHeight: height } = container;

                camera = new THREE.PerspectiveCamera(45, width / height, 1, 100);
                camera.position.z = 5;

                renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

                renderer.setSize(width, height);
                renderer.setClearColor(0x000000, 0);

                elementToAppend.appendChild(renderer.domElement);

                window.addEventListener("resize", onResize);
                document.addEventListener("mousemove", onDocumentMouseMove, false);

                const geometry = new THREE.PlaneGeometry(3, 3, 1, 1);
                material = new THREE.ShaderMaterial({
                    side: THREE.DoubleSide,
                    transparent: true,
                    uniforms: {
                        uTime: {
                            type: "1f",
                            value: 0.0,
                        },
                        uMultiplier: {
                            type: "f",
                            value: 2.0,
                        },
                    },
                    vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
    
          void main(void) {
            vUv = uv;
            vPosition = position;
    
            gl_Position = vec4(position, 1.0);
          }
        `,
                    fragmentShader: `
          vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }
    
          vec2 mod289(vec2 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }
    
          vec3 permute(vec3 x) {
            return mod289(((x*34.0)+1.0)*x);
          }
    
          float snoise(vec2 v)
          {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                -0.577350269189626,  // -1.0 + 2.0 * C.x
                0.024390243902439); // 1.0 / 41.0
            // First corner
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
    
            // Other corners
            vec2 i1;
            //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
            //i1.y = 1.0 - i1.x;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            // x0 = x0 - 0.0 + 0.0 * C.xx ;
            // x1 = x0 - i1 + 1.0 * C.xx ;
            // x2 = x0 - 1.0 + 2.0 * C.xx ;
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
    
            // Permutations
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
    
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
    
            // Gradients: 41 points uniformly over a line, mapped onto a diamond.
            // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
    
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
    
            // Normalise gradients implicitly by scaling m
            // Approximation of: m *= inversesqrt( a0*a0 + h*h );
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    
            // Compute final noise value at P
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }
    
          uniform float uTime;
          uniform float uMultiplier;
    
          varying vec2 vUv;
          varying vec3 vPosition;
    
          float fbm(in vec2 pos) {
            float a = sin(uTime);
            float b = cos(uTime);
            mat2 m = mat2(-0.80, 0.36, -0.60, -0.48);
    
            float total;
    
            total = 0.5000 * snoise(pos) * a;
            pos = m * pos * 2.02;
    
            total += 0.2500 * snoise(pos) * b;
            pos = m * pos * 2.03;
    
            total += 0.1250 * snoise(pos) * a;
            pos = m * pos * 2.01;
    
            total += 0.0625 * snoise(pos) * b;
    
            return total;
          }
    
          void main(void) {
            vec2 pos = vPosition.xy;
    
            vec2 q = vec2(fbm(pos + vec2(0.0)), fbm(pos + vec2(0.0)));
    
            float col = fbm(pos + sin(uTime) * uMultiplier * q);
    
            gl_FragColor = vec4(vec3(col), 2.0);
          }
        `,
                });

                const mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                draw();
            }

            function onDocumentMouseMove(event) {
                mouseX = event.clientX;
                mouseY = event.clientY;

                material.uniforms.uMultiplier.value += (mouseY / 100) * 0.001;
                material.uniforms.uTime.value += (mouseX / 100) * 0.001;
            }

            function draw() {
                material.uniforms.uTime.value += 0.001;
                renderer.render(scene, camera);
                requestAnimationFrame(draw);
            }

            setup();
        }
    }
    new App();
}
