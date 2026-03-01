/**
 * TEATRO DEL CAMALEÓN
 * POP ART + DEGRADADO + FONDO SELVA GEOMÉTRICA
 */

// ===============================
// MODELO COMPLETO
// ===============================

const chameleonModel = [

{ type: 'poly', pts: [[50,520],[850,480],[860,540],[60,580]], color:'#4E342E' },
{ type: 'poly', pts: [[650,495],[720,380],[750,395],[680,493]], color:'#5D4037' },
{ type: 'poly', pts: [[200,555],[120,650],[160,660],[230,552]], color:'#3E2723' },

{ type: 'poly', pts: [[350,300],[650,270],[720,450],[380,510]], color:'#43A047' },
{ type: 'poly', pts: [[350,300],[380,510],[250,430]], color:'#66BB6A' },
{ type: 'poly', pts: [[350,300],[520,220],[650,270]], color:'#81C784' },
{ type: 'poly', pts: [[650,270],[750,290],[780,420],[720,450]], color:'#2E7D32' },
{ type: 'poly', pts: [[380,510],[720,450],[600,540]], color:'#A5D6A7' },

{ type: 'poly', pts: [[450,330],[500,325],[490,410],[440,400]], color:'#1B5E20' },
{ type: 'poly', pts: [[570,310],[620,305],[630,380],[580,390]], color:'#C8E6C9' },
{ type: 'poly', pts: [[400,450],[460,440],[455,495],[410,490]], color:'#FFF59D' },
{ type: 'poly', pts: [[530,440],[580,430],[575,480],[535,475]], color:'#FFB74D' },

{ type: 'poly', pts: [[380,280],[410,270],[400,230]], color:'#1B5E20' },
{ type: 'poly', pts: [[480,240],[510,230],[500,190]], color:'#1B5E20' },
{ type: 'poly', pts: [[580,250],[610,240],[600,205]], color:'#1B5E20' },

{ type: 'poly', pts: [[250,430],[320,280],[120,300],[100,420]], color:'#388E3C' },
{ type: 'poly', pts: [[100,420],[120,300],[40,380]], color:'#81C784' },
{ type: 'poly', pts: [[100,420],[250,430],[230,480],[110,470]], color:'#1B5E20' },

{ type: 'poly', pts: [[320,280],[340,150],[230,250]], color:'#FF9800' },
{ type: 'poly', pts: [[230,250],[260,130],[160,200]], color:'#FB8C00' },
{ type: 'poly', pts: [[160,200],[180,100],[100,170]], color:'#F57C00' },

// OJO: estas tres circles y el triángulo forman el ojo original
{ type:'circle', x:190, y:350, r:55, color:'#FDD835' },
{ type:'circle', x:190, y:350, r:30, color:'#4CAF50' },
{ type:'circle', x:190, y:350, r:12, color:'#212121' },
{ type:'poly', pts:[[170,310],[210,310],[190,280]], color:'#FFF176' },

{ type: 'poly', pts: [[380,510],[440,490],[410,560],[360,550]], color:'#2E7D32' },
{ type: 'poly', pts: [[410,560],[360,550],[330,565],[350,595]], color:'#1B5E20' },
{ type: 'poly', pts: [[720,450],[770,440],[750,540],[700,530]], color:'#1B5E20' },
{ type: 'poly', pts: [[750,540],[700,530],[670,545],[690,575]], color:'#004D40' },
{ type: 'poly', pts: [[330,565],[350,595],[310,590]], color:'#FFF59D' },
{ type: 'poly', pts: [[670,545],[690,575],[650,570]], color:'#FFF59D' },

{ type: 'poly', pts: [[750,290],[780,420],[860,380],[840,260]], color:'#43A047' },
{ type: 'poly', pts: [[860,380],[840,260],[930,310],[930,430]], color:'#66BB6A' },
{ type: 'poly', pts: [[930,430],[930,310],[980,360],[960,470]], color:'#388E3C' },
{ type: 'poly', pts: [[960,470],[930,430],[880,490],[910,540]], color:'#1B5E20' },
{ type: 'poly', pts: [[910,540],[880,490],[810,510],[830,560]], color:'#2E7D32' },
{ type: 'poly', pts: [[830,560],[810,510],[760,520],[780,560]], color:'#4CAF50' },
{ type: 'poly', pts: [[780,560],[760,520],[730,530],[740,560]], color:'#81C784' },
{ type: 'poly', pts: [[740,560],[730,530],[715,540],[720,555]], color:'#A5D6A7' },
{ type: 'poly', pts: [[720,555],[715,540],[705,545],[708,552]], color:'#C8E6C9' },
{ type:'circle', x:830, y:400, r:15, color:'#FFEB3B' },
{ type:'circle', x:900, y:350, r:10, color:'#FFEB3B' }

];

// ===============================
// UTILIDAD COLOR
// ===============================

function adjustColor(hex, amount){
    const num=parseInt(hex.slice(1),16);
    let r=(num>>16)+amount;
    let g=((num>>8)&255)+amount;
    let b=(num&255)+amount;
    r=Math.max(0,Math.min(255,r));
    g=Math.max(0,Math.min(255,g));
    b=Math.max(0,Math.min(255,b));
    return `rgb(${r},${g},${b})`;
}

// ===============================
// RENDER
// ===============================

function drawApp(){

    const canvas=document.getElementById("chaosCanvas");
    if(!canvas) return;

    const ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // ---------- DIBUJAR CAMALEÓN ----------

    chameleonModel.forEach(part=>{

        // Detectar y dibujar el ojo con tratamiento especial
        const isEyeCenter = (part.type === 'circle' && part.x === 190 && part.y === 350);


        // Flujo normal para todas las demás piezas
        ctx.beginPath();

        let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;

        if(part.type==="poly"){
            ctx.moveTo(part.pts[0][0],part.pts[0][1]);
            part.pts.forEach(p=>{
                ctx.lineTo(p[0],p[1]);
                minX=Math.min(minX,p[0]);
                maxX=Math.max(maxX,p[0]);
                minY=Math.min(minY,p[1]);
                maxY=Math.max(maxY,p[1]);
            });
            ctx.closePath();
        }else{
            ctx.arc(part.x,part.y,part.r,0,Math.PI*2);
            minX=part.x-part.r;
            maxX=part.x+part.r;
            minY=part.y-part.r;
            maxY=part.y+part.r;
        }

        const grad=ctx.createLinearGradient(minX,minY,maxX,maxY);
        grad.addColorStop(0,adjustColor(part.color,30));
        grad.addColorStop(1,adjustColor(part.color,-30));

        ctx.fillStyle=grad;
        ctx.fill();

        ctx.strokeStyle="#000";
        ctx.lineWidth=5;
        ctx.lineJoin="round";
        ctx.lineCap="round";
        ctx.stroke();
    });
}

// ===============================
// UI
// ===============================

document.addEventListener("DOMContentLoaded",()=>{

    drawApp();

    const enterBtn=document.getElementById("enterBtn");
    const introScreen=document.getElementById("introScreen");

    if(enterBtn && introScreen){
        enterBtn.addEventListener("click",()=>{
            introScreen.style.opacity="0";
            setTimeout(()=>introScreen.style.display="none",500);
        });
    }
    const phraseEl=document.getElementById("floatingPhrase");
    if(phraseEl){
        phraseEl.innerText=phrases[Math.floor(Math.random()*phrases.length)];
    }

    window.addEventListener("scroll",()=>{
        const section=document.querySelector(".philosophy-section");
        if(section && section.getBoundingClientRect().top < window.innerHeight-100){
            section.classList.add("visible");
        }
    });

    window.addEventListener("resize",drawApp);
});