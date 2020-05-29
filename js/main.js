const home_url = "https://api.covid19api.com";
const countries_url = "https://api.covid19api.com/countries";
const country_url = "https://api.covid19api.com/live/country/";
const slugs = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "United States Minor Outlying Islands",
  "Virgin Islands",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cabo Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "DRC",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "CuraCao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Cote d'Ivoire",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Korea",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Kosovo",
  "Reunion",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Barthelemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const counties = [];

$(document).ready(() => {
  getCountryData();
  getData();
  getFooter();
});

function getData() {
  axios
    .get(`${home_url}/summary`)
    .then((res) => {
      let global = res.data.Global;
      let output = `
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Global Data in Summary</h4>
                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6 my-1">
                            <ul class="list-group">
                                <li class="list-group-item heading">Global Total</li>
                                <li class="list-group-item"><strong>Total Confirmed:</strong>&nbsp;${global.TotalConfirmed}</li>
                                <li class="list-group-item"><strong>Total Deaths:</strong>&nbsp;${global.TotalDeaths}</li>
                                <li class="list-group-item"><strong>Total Recovered:</strong>&nbsp;${global.TotalRecovered}</li>                                
                            </ul>
                        </div>

                        <div class="col-md-6 my-1">
                            <ul class="list-group">  
                                <li class="list-group-item heading">Global New</li>  
                                <li class="list-group-item"><strong>New Confirmed:</strong>&nbsp;${global.NewConfirmed}</li>
                                <li class="list-group-item"><strong>New Deaths:</strong>&nbsp;${global.NewDeaths}</li>
                                <li class="list-group-item"><strong>New Recovered:</strong>&nbsp;${global.NewRecovered}</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>
      `;

      $("#global-data").html(output);
    })
    .catch((err) => console.log(err));
}

function getCountryData() {
  let output = "";
  for (let i = 0; i < slugs.sort().length; i++) {
    axios
      .get(
        `https://shrouded-harbor-39689.herokuapp.com/https://covid19-stats-api.herokuapp.com/api/v1/cases?country=${slugs[i]}`
      )
      .then((res) => {
        let countries_data = res.data;

        //console.log(countries_data);

        output += `
          <div class="col-md-4">
            <div class="card">
              <div class="card-header">
                <h5 class="text-center"><strong>Country:</strong>&nbsp;${slugs[i]}</h5>
              </div>  
              <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item"><strong>Confirmed:</strong>&nbsp;${countries_data.confirmed}</li>
                  <li class="list-group-item"><strong>Deaths:</strong>&nbsp;${countries_data.deaths}</li>
                  <li class="list-group-item"><strong>Recovered:</strong>&nbsp;${countries_data.recovered}</li>                                
              </ul>

              </div>          
            </div>
          </div>          
          `;

        $("#countries").html(output);
      });
  }
}

function getFooter() {
  let output = `<p><span><i class="fas fa-exclamation-triangle fa-2x"></i></span><br>I realized the data pulled from the API I used is not upto date.
  <br>
  I might consider looking for an upto date API later. Also not all countries are presented. 
  <br>
  But for now, this is good enough.
  <br>
  I just did this for fun-:)<br>
  Alex&nbsp;<i class="fas fa-heart"></i></p>`;
  $("#footer").html(output);
}
