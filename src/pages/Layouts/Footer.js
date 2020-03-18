import React, { Component } from 'react';

class Footer extends Component {
   render() {
      return (
         <footer class="bg-dark text-white">
            <div class="container">
               <div class="row">
                  <div class="col-md-6">
                     <h5 class="text-center">Disclaimer</h5>
                     <p>This list is created by public contributions,
                        and managed voluntarily by [Name]</p>
                     <p>While listing additions are verified,
                        we do recommend calling to confirm details using
                        the contact information provided, as we cannot be responsible for how quickly
                     notice on the CLOSING of locations or services is distributed or moderated.</p>
                  </div>
                  <div class="col-md-6">
                     <h5 class="text-center">Contact infomation</h5>
                     <p>[Contact]</p>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12">
                     <p class="text-center">Built by Obika Gellineau | Copyright {new Date().getFullYear()} All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;