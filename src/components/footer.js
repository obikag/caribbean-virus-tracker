import React, { Fragment} from 'react';
import { Link } from 'gatsby';

const Footer = () => {
      return (
         <Fragment>
            <footer class="bg-dark text-white">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <h4 class="text-center">Disclaimer</h4>
                        <p class="text-center">This list is managed voluntarily by <a class="text-white" href="/about">Obika Gellineau</a></p>
                        <p>While listing additions are sourced through the <a class="text-white" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">
                           <em>WHO Situation reports on COVID-19</em></a> provided by the World Health Organization (WHO) and the <a class="text-white" href="https://github.com/CSSEGISandData/COVID-19">
                           <em>John Hopkins CSSE GitHub Repo on CORVID-19</em></a>, the site's author cannot be responsible for any inaccuracies reported by WHO and John Hopkins CSSE respectively.</p>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-12">
                        <p class="text-center"><Link to="/privacy-policy/" className="text-white"><strong>Privacy Policy</strong></Link> | Copyright &copy;{new Date().getFullYear()} All Rights Reserved.</p>
                     </div>
                  </div>
               </div>
               <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
               <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
               <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </footer>
         </Fragment>
      );
}

export default Footer;