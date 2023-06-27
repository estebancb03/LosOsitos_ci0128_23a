import { getCountry, postCountry, sql, getConnection } from "../src/models/countryModel.js";
describe('countryModel', () => {
  test('getCountry names of all the countries', async () => {
    const mockReq = {};
    const mockRes = {
      status: jest.fn(),
      json: jest.fn()
    };
    const expectedRecordset = [
      {
        "Name": "Afghanistan",
      },
      {
        "Name": "Albania",
      },
      {
        "Name": "Algeria",
      },
      {
        "Name": "Andorra",
      },
      {
        "Name": "Angola",
      },
      {
        "Name": "Antigua and Barbuda",
      },
      {
        "Name": "Argentina",
      },
      {
        "Name": "Armenia",
      },
      {
        "Name": "Australia",
      },
      {
        "Name": "Austria",
      },
      {
        "Name": "Azerbaijan",
      },
      {
        "Name": "Bahamas",
      },
      {
        "Name": "Bahrain",
      },
      {
        "Name": "Bangladesh",
      },
      {
        "Name": "Barbados",
      },
      {
        "Name": "Belarus",
      },
      {
        "Name": "Belgium",
      },
      {
        "Name": "Belize",
      },
      {
        "Name": "Benin",
      },
      {
        "Name": "Bhutan",
      },
      {
        "Name": "Bolivia",
      },
      {
        "Name": "Bosnia and Herzegovina",
      },
      {
        "Name": "Botswana",
      },
      {
        "Name": "Brazil",
      },
      {
        "Name": "Brunei",
      },
      {
        "Name": "Bulgaria",
      },
      {
        "Name": "Burkina Faso",
      },
      {
        "Name": "Burundi",
      },
      {
        "Name": "Cabo Verde",
      },
      {
        "Name": "Cambodia",
      },
      {
        "Name": "Cameroon",
      },
      {
        "Name": "Canada",
      },
      {
        "Name": "Central African Republic",
      },
      {
        "Name": "Chad",
      },
      {
        "Name": "Chile",
      },
      {
        "Name": "China",
      },
      {
        "Name": "Colombia",
      },
      {
        "Name": "Comoros",
      },
      {
        "Name": "Congo",
      },
      {
        "Name": "Costa Rica",
      },
      {
        "Name": "Croatia",
      },
      {
        "Name": "Cuba",
      },
      {
        "Name": "Cyprus",
      },
      {
        "Name": "Czech Republic",
      },
      {
        "Name": "Denmark",
      },
      {
        "Name": "Djibouti",
      },
      {
        "Name": "Dominica",
      },
      {
        "Name": "Dominican Republic",
      },
      {
        "Name": "East Timor",
      },
      {
        "Name": "Ecuador",
      },
      {
        "Name": "Egypt",
      },
      {
        "Name": "El Salvador",
      },
      {
        "Name": "Equatorial Guinea",
      },
      {
        "Name": "Eritrea",
      },
      {
        "Name": "Estonia",
      },
      {
        "Name": "Eswatini",
      },
      {
        "Name": "Ethiopia",
      },
      {
        "Name": "Fiji",
      },
      {
        "Name": "Finland",
      },
      {
        "Name": "France",
      },
      {
        "Name": "Gabon",
      },
      {
        "Name": "Gambia",
      },
      {
        "Name": "Georgia",
      },
      {
        "Name": "Germany",
      },
      {
        "Name": "Ghana",
      },
      {
        "Name": "Greece",
      },
      {
        "Name": "Grenada",
      },
      {
        "Name": "Guatemala",
      },
      {
        "Name": "Guinea",
      },
      {
        "Name": "Guinea-Bissau",
      },
      {
        "Name": "Guyana",
      },
      {
        "Name": "Haiti",
      },
      {
        "Name": "Honduras",
      },
      {
        "Name": "Hungary",
      },
      {
        "Name": "Iceland",
      },
      {
        "Name": "India",
      },
      {
        "Name": "Indonesia",
      },
      {
        "Name": "Iran",
      },
      {
        "Name": "Iraq",
      },
      {
        "Name": "Ireland",
      },
      {
        "Name": "Israel",
      },
      {
        "Name": "Italy",
      },
      {
        "Name": "Ivory Coast",
      },
      {
        "Name": "Jamaica",
      },
      {
        "Name": "Japan",
      },
      {
        "Name": "Jordan",
      },
      {
        "Name": "Kazakhstan",
      },
      {
        "Name": "Kenya",
      },
      {
        "Name": "Kiribati",
      },
      {
        "Name": "Kosovo",
      },
      {
        "Name": "Kuwait",
      },
      {
        "Name": "Kyrgyzstan",
      },
      {
        "Name": "Laos",
      },
      {
        "Name": "Latvia",
      },
      {
        "Name": "Lebanon",
      },
      {
        "Name": "Lesotho",
      },
      {
        "Name": "Liberia",
      },
      {
        "Name": "Libya",
      },
      {
        "Name": "Liechtenstein",
      },
      {
        "Name": "Lithuania",
      },
      {
        "Name": "Luxembourg",
      },
      {
        "Name": "Madagascar",
      },
      {
        "Name": "Malawi",
      },
      {
        "Name": "Malaysia",
      },
      {
        "Name": "Maldives",
      },
      {
        "Name": "Mali",
      },
      {
        "Name": "Malta",
      },
      {
        "Name": "Marshall Islands",
      },
      {
        "Name": "Mauritania",
      },
      {
        "Name": "Mauritius",
      },
      {
        "Name": "Mexico",
      },
      {
        "Name": "Micronesia",
      },
      {
        "Name": "Moldova",
      },
      {
        "Name": "Monaco",
      },
      {
        "Name": "Mongolia",
      },
      {
        "Name": "Montenegro",
      },
      {
        "Name": "Morocco",
      },
      {
        "Name": "Mozambique",
      },
      {
        "Name": "Myanmar",
      },
      {
        "Name": "Namibia",
      },
      {
        "Name": "Nauru",
      },
      {
        "Name": "Nepal",
      },
      {
        "Name": "Netherlands",
      },
      {
        "Name": "New Zealand",
      },
      {
        "Name": "Nicaragua",
      },
      {
        "Name": "Niger",
      },
      {
        "Name": "Nigeria",
      },
      {
        "Name": "North Korea",
      },
      {
        "Name": "North Macedonia",
      },
      {
        "Name": "Norway",
      },
      {
        "Name": "Oman",
      },
      {
        "Name": "Pakistan",
      },
      {
        "Name": "Palau",
      },
      {
        "Name": "Palestine",
      },
      {
        "Name": "Panama",
      },
      {
        "Name": "Papua New Guinea",
      },
      {
        "Name": "Paraguay",
      },
      {
        "Name": "Peru",
      },
      {
        "Name": "Philippines",
      },
      {
        "Name": "Poland",
      },
      {
        "Name": "Portugal",
      },
      {
        "Name": "Qatar",
      },
      {
        "Name": "Romania",
      },
      {
        "Name": "Russia",
      },
      {
        "Name": "Rwanda",
      },
      {
        "Name": "Saint Kitts and Nevis",
      },
      {
        "Name": "Saint Lucia",
      },
      {
        "Name": "Samoa",
      },
      {
        "Name": "San Marino",
      },
      {
        "Name": "Sao Tome and Principe",
      },
      {
        "Name": "Saudi Arabia",
      },
      {
        "Name": "Senegal",
      },
      {
        "Name": "Serbia",
      },
      {
        "Name": "Seychelles",
      },
      {
        "Name": "Sierra Leone",
      },
      {
        "Name": "Singapore",
      },
      {
        "Name": "Slovakia",
      },
      {
        "Name": "Slovenia",
      },
      {
        "Name": "Solomon Islands",
      },
      {
        "Name": "Somalia",
      },
      {
        "Name": "South Africa",
      },
      {
        "Name": "South Korea",
      },
      {
        "Name": "South Sudan",
      },
      {
        "Name": "Spain",
      },
      {
        "Name": "Sri Lanka",
      },
      {
        "Name": "Sudan",
      },
      {
        "Name": "Suriname",
      },
      {
        "Name": "Sweden",
      },
      {
        "Name": "Switzerland",
      },
      {
        "Name": "Syria",
      },
      {
        "Name": "Taiwan",
      },
      {
        "Name": "Tajikistan",
      },
      {
        "Name": "Tanzania",
      },
      {
        "Name": "Thailand",
      },
      {
        "Name": "Togo",
      },
      {
        "Name": "Tonga",
      },
      {
        "Name": "Trinidad and Tobago",
      },
      {
        "Name": "Tunisia",
      },
      {
        "Name": "Turkey",
      },
      {
        "Name": "Turkmenistan",
      },
      {
        "Name": "Tuvalu",
      },
      {
        "Name": "Uganda",
      },
      {
        "Name": "Ukraine",
      },
      {
        "Name": "undefined",
      },
      {
        "Name": "United Arab Emirates",
      },
      {
        "Name": "United Kingdom",
      },
      {
        "Name": "United States",
      },
      {
        "Name": "Uruguay",
      },
      {
        "Name": "Uzbekistan",
      },
      {
        "Name": "Vanuatu",
      },
      {
        "Name": "Vatican City",
      },
      {
        "Name": "Venezuela",
      },
      {
        "Name": "Vietnam",
      },
      {
        "Name": "Yemen",
      },
      {
        "Name": "Zambia",
      },
      {
        "Name": "Zimbabwe",
      }
    ];
    await getCountry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(expectedRecordset);
  });

  test('test_insert_country_empty_body', async () => {
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await postCountry(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  test('test_insert_country_error_inserting', async () => {
    const req = { body: { Name: 'Costa Rica' } };
    const res = { status: jest.fn(), send: jest.fn() };

    await postCountry(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });
});