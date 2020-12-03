
const g=document.getElementById('sec');
const m=document.getElementById('min');
// start button
const s=document.getElementById('start');
// pause button
const p=document.getElementById('pause');
// reset buttton
const r=document.getElementById('reset');
const ms=document.getElementById('msec');
const rs=document.getElementById('res');
// dark mode
const b=document.getElementById('body');
const br=document.getElementById('dark');
const hd=document.getElementById('hr');

//INPUT min
let a=0,h=0;
//input sec

    br.addEventListener("click",function()

    {
        // console.log('vhgvhg')
        // switch from dark mode to normal mode
        b.classList.toggle("light",);
        if(br.innerHTML=="Dark mode")
        {
        br.innerHTML="Normal mode ";
        }
        else 
        {
            br.innerHTML="Dark mode";
        }

    }

    )
        // start button listner
        s.addEventListener("click",function()
        {
            rs.innerHTML="";
            s.disabled = true;
            p.disabled = false;
        // sec
        var i = 0;
        // millisec
        var j =0;
        // setting an interval of 1000millisecond
        var interval = setInterval(function()
        {   

            // millisecond loop
            var interval1=setInterval(function()
            {
                if(j<100)
            {
                if(j<10)
                {
                    msec.innerHTML=`0${j}`
                }
                else{
                    msec.innerHTML=j;
                }
                j++;
                if(j==100)
                {
                    j=0;
                }
            }

            },10)
            // minute,hour and second loop
            if(i<=60)
            {
            // console.log(i);
            if(i<10)
            {
                // for two digit number
                g.innerHTML=`0${i}`
            }  
            else
            {
                // align second value to html element
            g.innerHTML=i;
            } 
            i++;
            }
            
            if(a<10)
            {
                // for two digit number
                m.innerHTML=`0${a}`;
            }
            else{
                // align minute value to html element
            m.innerHTML=a;
            }
            if(i==60)
            {
                // increment hour after a 60 second
                a++;
                i=0;
            }
            if(a==60)
            {
                a=0;
                // increment hour after a 60 minute
                h++;
                // align second value to html element
                hd.innerHTML=h;
            }
            if(h==12)
            {
                h=0;
                i=0;
                a=0;
                j=0;
            }
               
                    // Reset button action listner
                    r.addEventListener("click",function()
                    {
                        // clear the current interval
                        clearInterval(interval);
                        clearInterval(interval1);
                        // set back default values
                        g.innerHTML="00";
                        m.innerHTML="00";
                        msec.innerHTML="00";
                        rs.innerHTML="";
                        // reenable disabled button
                        s.disabled = false;
                        p.disabled = true;
                        
                    }) 
                        // Pause button event listner
                        p.addEventListener("click",function()
                        {
                        
                        clearInterval(interval);
                        clearInterval(interval1);
                        // Display result
                        rs.innerHTML=`Time elapsed ${h} hours ${a} min ${i-1} seconds ${j-1} millisecond`;
                        // reenable disabled button
                        s.disabled = false;
                        // console.log(a);
                        // console.log(i);
                        // console.log(j);
                        })
}, 1000);

})

