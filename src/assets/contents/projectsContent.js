import ngTechImg from "@/assets/img/thumbnails/ng-TECH-img.png";
import lookForABookImg from "@/assets/img/thumbnails/look-for-a-book-img.jpeg";
import angularSocialImg from "@/assets/img/thumbnails/angular-social-img.jpeg";
import POFImg from "@/assets/img/thumbnails/POF-img.png";
import orizonImg from "@/assets/img/thumbnails/orizon-img.jpg";
import happieVeggieImg from "@/assets/img/thumbnails/happie-veggie-img.png";
import ticTacToeImg from "@/assets/img/thumbnails/tic-tac-toe-img.png";
import kreasShopImg from "@/assets/img/thumbnails/kreas-shop-img.jpg";
import pomeliaHotelImg from "@/assets/img/thumbnails/pomelia-img.jpg";

export default {
  projects: [
    {
      bedge: "mdi:language-javascript",
      title: "Look for a Book",
      description:
        "Look for a Book is a book search website powered by Open Library, realized with JavaScript and designed with Material Design for Bootstrap. More details on the Github repo.",
      requirements: [
        "Use of Open Library API.",
        "Search function.",
        "Displaying of list with the search results and respective general info.",
        "Possibility to consult the description of each book in the list.",
      ],
      thumbnail: lookForABookImg,
      siteLink: "https://gio-mex.github.io/look-for-a-book/dist/",
      repoLink: "https://github.com/Gio-Mex/look-for-a-book",
    },
    {
      bedge: "mdi:angular",
      title: "Angular Social",
      description:
        "Angular Social is a basic simulation of a social network powered by Go REST. It is realized with Angular and designed with Angular Material. More details on the Github repo.",
      requirements: [
        "Login & Logout using GoRest API with Bearer Token.",
        "User list with basic info, search, record count control, add/remove users.",
        "User detail page with full info, posts and comments, add comments.",
        "All posts view with search, add posts, view/manage comments.",
        "Unit testing with minimum 60% coverage.",
        "Modular structure with lazy loading.",
      ],
      thumbnail: angularSocialImg,
      siteLink: "https://angular-social.netlify.app",
      repoLink: "https://github.com/Gio-Mex/angular-social",
    },
    {
      bedge: "mdi:angular",
      title: "Ng TECH",
      description:
        "Ng TECH is a basic portal for tech news powered by Hacker News. It is realized with Angular and designed with Angular Material. More details on the Github repo.",
      requirements: [
        "Use of Hacker News API.",
        "Displaying of the latest news, with their general info.",
        "Displaying only 10 news items at a time.",
        "Using a button (Load more), view the info of the next 10 news items.",
      ],
      thumbnail: ngTechImg,
      siteLink: "https://ng-tech-d274a.web.app",
      repoLink: "https://github.com/Gio-Mex/ng-TECH",
    },
    {
      bedge: "lineicons:react",
      title: "Happie Veggie",
      description:
        "This app uses Spoonacular to search and view vegetarian recipes (up to 100 per query). Built with React, TypeScript, Tailwind, and Shadcn. Note: free usage has a daily search limit.",
      requirements: [
        "A search bar to search for vegetarian recipes.",
        "Search results must display the title and cover image of each recipe.",
        "Clicking on a recipe should navigate to a dedicated page.",
        "The UI and UX should be simple and easy to use.",
        "Implement unit tests with at least 60% coverage.",
        "The app should have a well-structured and understandable layout.",
        "The design must be responsive.",
        "Bonus requirements: use React Router, Axios, React Hooks and Redux.",
      ],
      thumbnail: happieVeggieImg,
      siteLink: "https://happie-veggie.netlify.app",
      repoLink: "https://github.com/Gio-Mex/happie-veggie",
    },
    {
      bedge: "mdi:vuejs",
      title: "Tic Tac Toe",
      description:
        "The classic Tic Tac Toe game, developed in Vue.js with JavaScript",
      requirements: [
        "Display a 3x3 grid on the page upon user access.",
        "Clicking on a cell alternates between X and O. The first move is always X.",
      ],
      thumbnail: ticTacToeImg,
      siteLink: "https://https://vue-tictactoe-game.netlify.app/",
      repoLink: "https://github.com/Gio-Mex/tic-tac-toe",
    },
    {
      bedge: "mdi:vuejs",
      title: "Kreas Shop",
      description:
        "This project reproduces the functioning of a hypothetical synthetic meat shop, with the product search function and shopping cart. It was developed with Vue.js in Typescript.",
      requirements: [
        "The app must be optimized for mobile devices first, then adapt to larger screens.",
        "Fetch product data (name, price, image, description) from an external API.",
        "Display a list of all products retrieved from the API, with their name, price and image.",
        "Clicking on a product should navigate to a dedicated page.",
        "Cart page with a list of all products added to the cart, that simulates buying them.",
      ],
      thumbnail: kreasShopImg,
      siteLink: "https://vue-kreas-shop.netlify.app",
      repoLink: "https://github.com/Gio-Mex/kreas-shop",
    },
    {
      bedge: "mdi:wordpress",
      title: "Pomelia Hotel",
      description:
        "This Wordpress project recreate a simple website for an hypothetical eco-friendly hotel. The theme was developed with both Gutenberg and custom CSS classes.",
      requirements: [
        "Create a custom theme in Wordpress.",
        "There must be a contact form.",
      ],
      thumbnail: pomeliaHotelImg,
      repoLink: "https://github.com/Gio-Mex/pomelia-hotel",
    },
    {
      bedge: "mdi:nodejs",
      title: "Planty of Food APIs",
      description:
      "This Node.js project replicates JSON RESTful APIs for a hypothetical platform managing Planty of Food purchasing groups. Built with Express, MongoDB, and Mongoose. Mocha, Chai, and Sinon were used for testing. More details on GitHub.",
      requirements: [
        "Follow REST principles including naming, methods, and status codes.",
        "Manage products with a name field (add, update, delete).",
        "Manage users with name, surname, and email (add, update, delete).",
        "Manage sales orders with associated products and users (add, update, delete).",
        "View all orders with filters by date and products."
      ],
      thumbnail: POFImg,
      repoLink: "https://github.com/Gio-Mex/POF-APIs",
    },
    {
      bedge: "mdi:language-php",
      title: "Orizon APIs",
      description:
        "This PHP project recreates the JSON RESTful APIs for the hypothetical Orizon travel agency.",
        requirements: [
          "Use RESTful APIs with correct naming, HTTP methods, and status codes.",
          "Manage countries with a single name field (create, update, delete).",
          "Manage trips with countries and available seats (create, update, delete).",
          "Retrieve and filter trips by country and seat availability.",
          "Use MySQL as the database."
        ],
      thumbnail: orizonImg,
      repoLink: "https://github.com/Gio-Mex/orizon-api",
    },
  ],
};
