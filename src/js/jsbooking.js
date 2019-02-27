// vue pour le choix du formulaire dans le header
let app = new Vue({
  el: "#appbooking",
  data: {
    listeSejours: [],
    pays: "",
    sejours: [],
    listeTrips: [],
    nbSejours: 0,
    nbPersonnes: 0,
    price: 0

  },
  created() {
    axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
      .then(response => {
        this.listeSejours = response.data;

        //this.nbMale = this.listeRobots.filter(robot => robot.gender == 'Male').length;
      })
  },
  methods: {
    choixPays(param) {
      this.sejours = this.listeSejours.filter(listeSejours => listeSejours.countryName == param);
      this.pays = param;
      // FAUX
      this.nbSejours = this.listeSejours.length;
      // ERROR
      this.listeTrips = this.sejours.trips;
      //this.nbSejours = this.sejours[trips].length;
    }
  }
});
