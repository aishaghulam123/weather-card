var season = prompt(` Select your favorite season 
    1. Summer
    2.Winter
    3.Autumn
    4.Spring
    5.Rainy
    6.Snowy
    7.Thunderstorm`).toLocaleLowerCase();


    // 1. Summer
    if(season === "summer"){
        document.writeln(`
             <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/summer-1.gif) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/summer-gif-2.gif" class="card-img-top  animate__animated animate__backInLeft" alt="...">
       <div class="card-body  animate__animated animate__backInRight">
         <h5 class="card-title">Summer</h5>
         <p class="card-text">Summer is hot and sunny. Bright days fill the world with warmth and energy.</p>
       </div>
     </div>


   </div>`)
    }
    // 2.Winter
     else if(season === "winter"){
        document.writeln(`
             <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/winter-1.webp) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/winter-2.gif" class="card-img-top animate__animated animate__backInLeft" alt="...">
       <div class="card-body animate__animated animate__backInRight">
         <h5 class="card-title">Winter</h5>
         <p class="card-text">Winter is cold and calm. Warm clothes and chilly winds define the season.</p>
       </div>
     </div>


   </div>`)
    }
    // 3.Autumn
     else if(season === "autumn"){
        document.writeln(`
            
 <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/autumn-1.gif) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card  animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/autumn-2.webp" class="card-img-top animate__animated animate__backInLeft" alt="...">
       <div class="card-body animate__animated animate__backInRight">
         <h5 class="card-title">Autumn</h5>
         <p class="card-text">Autumn is cool and colorful. Leaves fall and nature slowly changes.</p>
       </div>
     </div>


   </div>
`)
    }
    // 4.Spring
     else if(season === "spring"){
        document.writeln(`    
 <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/spring-1.jfif) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/spring-2.gif" class="card-img-top animate__animated animate__backInLeft" alt="...">
       <div class="card-body animate__animated animate__backInRight">
         <h5 class="card-title">Spring</h5>
         <p class="card-text">Spring is fresh and pleasant. Flowers bloom and life begins again.</p>
       </div>
     </div>


   </div>`)
    }
    // 5.Rainy
     else if(season === "rainy"){
        document.writeln(`
            
 <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/rain-1.gif) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/rain-2.gif" class="card-img-top animate__animated animate__backInLeft" alt="...">
       <div class="card-body animate__animated animate__backInRight">
         <h5 class="card-title">Rainy</h5>
         <p class="card-text">The rainy season is cool and refreshing. Raindrops bring life to the earth.</p>
       </div>
     </div>


   </div>
`)
    }
    // 6.Snowy
     else if(season === "snowy"){
        document.writeln(`
              
 <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/snowy-2.gif) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/snowy-1.gif" class="card-img-top animate__animated animate__backInLeft" alt="...">
       <div class="card-body animate__animated animate__backInRight">
         <h5 class="card-title">Snowy</h5>
         <p class="card-text">The snowy season is cold and magical. White snow covers everything.</p>
       </div>
     </div>


   </div>
`)
    }
    // 7.Thunderstorm
     else if(season === "thunderstorm"){
        document.writeln(`
               
 <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/thunder-1.webp) no-repeat center center/cover;
overflow: hidden;
">

     <div class="card animate__animated animate__backInDown" style="width: 18rem;">
       <img src="./assets/thunder-2.gif" class="card-img-top animate__animated animate__backInLeft" alt="...">
       <div class="card-body animate__animated animate__backInRight">
         <h5 class="card-title">Thunderstorm</h5>
         <p class="card-text">A thunderstorm is loud and powerful. Lightning and thunder fill the sky.</p>
       </div>
     </div>


   </div>
`)
    }

    // else
        else{
            document.writeln(`
                
                             
 <div class="d-flex align-items-center justify-content-center" style="height: 100vh;
width: 100vw;
background: url(./assets/entra.gif) no-repeat center center/cover;
overflow: hidden;
">

     <div class=" animate__animated animate__backInDown" >
         <h1 class="card-title">Invalid season selected. Please choose a given season</h1>
     </div>


   </div>`)
        }

    
    