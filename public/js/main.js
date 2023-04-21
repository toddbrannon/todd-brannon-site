// MODAL FOR SECTION 1 (ORDERSPONSE)

  // Get modal element
  var modal = document.getElementById('simpleModal');
  var modal2 = document.getElementById('simpleModal2');
  var modal3 = document.getElementById('simpleModal3');
  var modal4 = document.getElementById('simpleModal4');

  // // Get open modal button
  var modalBtn = document.getElementById('modalBtn');
  var modalBtn2 = document.getElementById('modalBtn2');
  var modalBtn3 = document.getElementById('modalBtn3');
  var modalBtn4 = document.getElementById('modalBtn4');
  
  // Get close button
  var closeBtn = document.getElementsByClassName('closeBtn')[0];
  var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
  var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];
  var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];
  
  // // Listen for an open click
  if(modalBtn){
      modalBtn.addEventListener('click', openModal);
  }

  if(modalBtn2){
      modalBtn2.addEventListener('click', openModal2);
  }

  if(modalBtn3){
    modalBtn3.addEventListener('click', openModal3);
}

if(modalBtn4){
    modalBtn4.addEventListener('click', openModal4);
}

  


  // // Listen for a close click
  if(closeBtn){
      closeBtn.addEventListener('click', closeModal);
}

  if(closeBtn2){
      closeBtn2.addEventListener('click', closeModal2);
}

  if(closeBtn3){
    closeBtn3.addEventListener('click', closeModal3);
}

  if(closeBtn4){
      closeBtn4.addEventListener('click', closeModal4);
}

  // Listen for click outside modal box
  window.addEventListener('click', clickOutside);

  window.addEventListener('click', clickOutside2);

  window.addEventListener('click', clickOutside3);

  window.addEventListener('click', clickOutside4);
  
  function openModal(){
      modal.style.display='block';
  }

  function openModal2(){
      modal2.style.display='block';
  }

  function openModal3(){
    modal3.style.display='block';
  }

  function openModal4() {
      modal4.style.display='block';
  }

  function closeModal(){
      modal.style.display='none';
      stopVideo(modal);
}

  function closeModal2(){
    modal2.style.display='none';
    stopVideo(modal2);
}

function closeModal3(){
    modal3.style.display='none';
    stopVideo(modal3);
}

function closeModal4(){
    modal4.style.display='none';
    stopVideo(modal4);
}



  function clickOutside(e){
      if(e.target == modal){
          modal.style.display = 'none';
          stopVideo(modal)
      }    
  }

  function clickOutside2(e){
      if(e.target == modal2){
          modal2.style.display = 'none';
          stopVideo2(modal2);
      }
  }

  function clickOutside3(e){
    if(e.target == modal3){
        modal3.style.display = 'none';
        stopVideo3(modal3);
    }
}

  function clickOutside4(e){
    if(e.target == modal4){
        modal4.style.display = 'none';
        stopVideo4(modal4);
    }   
  }
  
  // Stop video play when modal closes
  function stopVideo(modal) {
      var currentIframe = modal.querySelector('.vid-modal-content > iframe');
      currentIframe.src = currentIframe.src;
    }

function stopVideo2(modal2){
    var currentIframe = modal2.querySelector('.vid-modal-content > iframe');
    currentIframe.src = currentIframe.src;
}

function stopVideo3(modal3){
    var currentIframe = modal3.querySelector('.vid-modal-content > iframe');
    currentIframe.src = currentIframe.src;
}

function stopVideo4(modal4){
    var currentIframe = modal4.querySelector('.vid-modal-content > iframe');
    currentIframe.src = currentIframe.src;
}
  

// // MODAL FOR SECTION 3 (FEEDBACK APP)

//   // Get modal element
// var modal3 = document.getElementById('simpleModal3');

// // // Get open modal button
// var modalBtn3 = document.getElementById('modalBtn3');

// // Get close button
// var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];



// // // Listen for an open click
// if(modalBtn3){
//     modalBtn3.addEventListener('click', openModal3);
// }

// // // Listen for a close click
// if(closeBtn3){
//     closeBtn3.addEventListener('click', closeModal3);
// }
// // Listen for click outside modal box
// window.addEventListener('click', clickOutside3);

// function openModal3(){
//     modal3.style.display='block';
// }

// function closeModal3(){
//     modal3.style.display='none';
//     stopVideo(modal3);
// }

// function clickOutside3(e){
//     if(e.target == modal3){
//         modal3.style.display = 'none';
//         stopVideo(modal3)
//     }    
// }

// // Stop video play when modal closes
// function stopVideo(modal3) {
//     var currentIframe = modal3.querySelector('.vid-modal-content > iframe');
//     currentIframe.src = currentIframe.src;
//   }


//   // MODAL FOR SECTION 4 (TRUSPONSE FOR TVE APP)

//   // Get modal element
// var modal4 = document.getElementById('simpleModal4');

// // // Get open modal button
// var modalBtn4 = document.getElementById('modalBtn4');

// // Get close button
// var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];

// // // Listen for an open click
// if(modalBtn4){
//     modalBtn4.addEventListener('click', openModal4);
//     console.log("modal button clicked")
// }

// // // Listen for a close click
// if(closeBtn4){
//     closeBtn4.addEventListener('click', closeModal4);
// }
// // Listen for click outside modal box
// window.addEventListener('click', clickOutside4);

// function openModal4(){
//     modal4.style.display='block';
// }

// function closeModal4(){
//     modal4.style.display='none';
//     stopVideo(modal4);
// }

// function clickOutside4(e){
//     if(e.target == modal4){
//         modal4.style.display = 'none';
//         stopVideo(modal4)
//     }    
// }

// // Stop video play when modal closes
// function stopVideo(modal4) {
//     var currentIframe = modal4.querySelector('.vid-modal-content > iframe');
//     currentIframe.src = currentIframe.src;
//   }

// // image modals on blog posts ------------------ //

