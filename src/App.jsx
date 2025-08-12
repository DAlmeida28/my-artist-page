import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function App() {

  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const controls = new OrbitControls( camera, renderer.domElement );

    const light = new THREE.AmbientLight( 0x404040, 20); 
    scene.add( light );

    const loader = new GLTFLoader();

    loader.load( '/models/STudio.glb', function ( glb ) {
    console.log(glb);
      scene.add( glb.scene );
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    camera.position.z = 100;
    camera.position.y = 10;
    camera.position.x = 4;

    function animate() {
      console.log(camera.position);
      renderer.render( scene, camera );
    }
    renderer.setAnimationLoop( animate );

  }, []);
  return (
    <>
    </>
  )
}

export default App
