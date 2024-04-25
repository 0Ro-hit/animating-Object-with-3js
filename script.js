const scene= new THREE.Scene();
const scene1= new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5

;

const renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry=new THREE.BoxGeometry(1,1,1);
// few more basic geometry
// const geometry = new THREE.CapsuleGeometry(1,1,4,8);
// const geometry = new THREE.CircleGeometry(1,1,4,8);
// const geometry = new THREE.ConeGeometry(1,1,4,8);
// const geometry = new THREE.CylinderGeometry(1,1,4,8);
const material= new THREE.MeshBasicMaterial({color: 'blue'});
const cube=new THREE.Mesh(geometry,material);


// if you want to use skeleton type object tha  use 
// const circle= new THREE.Line(geometry,material);

scene.add(cube);
scene1.add(circle);
var flag=true;
// cube.rotation.x=Math.PI*(45/180.0);  you can also use this for formula for rotating 


function anime(){
    if(cube.position.x >5){
        flag=false;
    }
    else if(cube.position.x <-5){
        flag=true;
    }
    if(flag){
        cube.position.x+=0.1;
    }
    else cube.position.x -=0.1;

    renderer.render(scene,camera);
    requestAnimationFrame(anime2);
}
anime();

