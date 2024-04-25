const scene= new THREE.Scene();
const scene1= new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5

;

const renderer= new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry=new THREE.BoxGeometry(1,1,1);
const material= new THREE.MeshBasicMaterial({color: 'blue'});
const cube=new THREE.Mesh(geometry,material);


const geometry2=new THREE.CircleGeometry(1,32);
const material2=new THREE.MeshBasicMaterial({color:'pink'})
const circle=new THREE.Mesh(geometry2,material2);

scene.add(cube);
scene1.add(circle);
var flag=true;
// cube.rotation.x=Math.PI*(45/180.0);
function anime(){
    if(circle.position.x>5){
        circle.position.x += 0.1;
    }
    else if(circle.position.x<-5){
        circle.position.x -=0.1;
    }
    renderer.render(scene1,camera);
    requestAnimationFrame(anime);
}
anime();

function anime2(){
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
anime2();

