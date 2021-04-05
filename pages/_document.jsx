import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="https://res.cloudinary.com/emmerse-vr/image/upload/v1612362448/assets/imgs/emmerse-icon_dx535g.png"
          />

          {/* FONTS */}
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Roboto:100,300,400,400italic,700"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Patua+One:100,300,400,400italic,700"
          />
          <link
            rel="stylesheet"
            href="http://fonts.googleapis.com/css?family=Lato:100,300,400,400italic,500,700,900"
          />

          {/* CSS */}
          <link rel="stylesheet" href="styles/globals.css" />
          <link rel="stylesheet" href="styles/structure.css" />
          <link rel="stylesheet" href="styles/builder.css" />
          <link rel="stylesheet" href="styles/settings.css" />
          <link rel="stylesheet" href="styles/app.css" />
        </Head>
        <body className="home template-slider layout-full-width mobile-tb-left no-content-padding header-overlay header-transparent header-fw minimalist-header sticky-header sticky-white ab-hide subheader-both-center">
          <Main />
          <NextScript />

          
    <script src="js/jquery-2.1.4.min.js"></script>

    <script src="js/mfn.menu.js"></script>
    <script src="js/jquery.plugins.js"></script>
    <script src="js/jquery.jplayer.min.js"></script>
    <script src="js/animations/animations.js"></script>
    <script src="js/scripts.js"></script>

    <script src="plugins/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
    <script src="plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.video.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.actions.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.kenburn.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.navigation.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.migration.min.js"></script>
    <script src="plugins/rs-plugin/js/extensions/revolution.extension.parallax.min.js"></script>

    <script async src="custom.js"></script>
        </body>
      </Html>
    );
  }
}
