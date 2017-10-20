import React from 'react';
import {Helmet} from "react-helmet";

class App extends React.Component {
   render() {
      return (
           <div>
             <Header/>
             <Content/>
          </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div className="Header">
<Helmet>
  <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="title" content="ScoopThemes">
   <meta name="ROBOTS" content="Bootstrap 3 Themes, Responsive Themes, Bootstrap 3 Responsive, Wordpress Themes, Clean Themes, Modern Themes, Flat Themes, Flat UI, UI Design, UX Design, Web design, responsive bootstrap, Jquery Plugins, Free Plugins, Premium Bootstrap themes, Bootstrap 3, Premium Web Templates, Bootstrap Templates, Bootstrap Responsive Templates, Admin, Dashboard, Admin Templates, Admin Responsive, Admin responsive themes">
   <meta name="description" content="Solutions For Web Developers Form ( Web Templates, Web Themes, Jquery Plugins, UX Design.. ) Whatever They Need.">
   <meta name="abstract" content="Solutions For Web Developers Form ( Web Templates, Web Themes, Jquery Plugins, UX Design.. ) Whatever They Need.">

   <meta name="author" content="www.scoopthemes.com">
   <meta name="publisher" content="www.scoopthemes.com">
   <meta name="copyright" content="www.scoopthemes.com">
   <meta name="revisit-after" content="2 days">
   <link rel="shortcut icon" href="assets/img/favicon.png">

   <title>Cerner Care</title>
     <link href="assets/css/bootstrap.css" rel="stylesheet">
      <link href="assets/css/font-awesome.css" rel="stylesheet">
      <link href="assets/css/bootstrap-theme.css" rel="stylesheet">
      <link rel="stylesheet" href="assets/css/animations.css">
            <link href="assets/css/style.css" rel="stylesheet">
</Helmet>

         </div>
      );
   }
}



class Content extends React.Component {
   render() {
      return (
         <div>
           <div class="cloud floating">
         <img src="assets/img/cloud.png" alt="Scoop Themes">
     </div>

     <div class="cloud pos1 fliped floating">
         <img src="assets/img/cloud3.png" alt="Scoop Themes">
     </div>

     <div class="cloud pos2 floating">
         <img src="assets/img/cloud1.png" alt="Scoop Themes">
     </div>

     <div class="cloud pos3 fliped floating">
         <img src="assets/img/cloud2.png" alt="Scoop Themes">
     </div>


     <div id="wrapper">
         <div class="container">
             <div class="row">
                 <div class="col-sm-12 col-md-12 col-lg-12">
                     <h1>CernerCare</h1>
                     <br/>
                     <br/>
                     <h2 class="subtitle">We can help you find nearest hospital</h2>
                     <br/>

                     <form class="form-inline validate signup" action="http://scoopthemes.us8.list-manage.com/subscribe/post-json?u=c535e62cabdc2bfeb87bff6de&amp;id=d969b07f82&c=?" method="get" role="form">

                         <a href="map.html"><input type="submit" id="myButton" name="subscribe" value="Find Care" class="btn btn-theme" onclick="map.html"/></a>
                     </form>
                     <br/>
                 </div>
                 <div class="col-sm-12 align-center">
                     <ul class="social-network social-circle">
                         <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a>
                         </li>
                         <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a>
                         </li>
                         <li><a href="#" class="icoGit" title="Github"><i class="fa fa-github"></i></a>
                         </li>
                         <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                         </li>
                     </ul>
                 </div>
             </div>
             <div class="row">
                 <div class="col-lg-6 col-lg-offset-3">
                     <p class="copyright">Copyright &copy; 2014 - <a href="http://www.cerner.com">Cerner HealthCare</a>
                     </p>
                 </div>
             </div>
         </div>
     </div>


     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
     <script src="http://downloads.mailchimp.com/js/jquery.form-n-validate.js"></script>
     <script src="https://maps.googleapis.com/maps/api/js?callback=myMap"></script>
     <script>

 $(document).ready( function () {
     $('#wrapper').height($(document).height());

     var $form = $('form');

     if ( $form.length > 0 ) {
         $('form input[type="submit"]').bind('click', function ( event ) {
             if ( event ) event.preventDefault();
             if ( $form.validate() ) { register($form); }
         });
     }
 });
 document.getElementById("myButton").onclick = function () {
         location.href = "map.html";
     };

 function appendResult(userText , className, iconClass){
   var resultHTML = "<div class='stretchLeft result "+ className + "'>" + userText + " <span class='fa fa-" + iconClass + "'></span>" + "</div>";
   $('body').append(resultHTML);
   $('.result').delay(10000).fadeOut('1000');
 }

     </script>
         </div>
      );
   }
}
export default App;
