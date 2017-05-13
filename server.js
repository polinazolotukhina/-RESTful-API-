var express = require('express');
var app = express();


const cors = require('cors');
app.use(cors());
app.options('*', cors());



app.get('/', function(req, res){
	res.send(
[
  {
    "title": "Frankie Dettori",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_fdt_180x100.jpg",
    "categories": [ 
    	{
    		"id": 39,
    		"name": "Popular Games"
    	},
    	{
    		"id": 3,
    		"name": "Slots"
    	},
    	{
    		"id": 79,
    		"name": "All Games"
    	},
       {
        "id": 1,
        "name": "Test"
      },

    ]
  },

    {
    "title": "Frankie Dettori",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_fdt_180x100.jpg",
     "categories": [ 
      {
        "id": 39,
        "name": "Popular Games"
      },
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
  
  },


  {
    "title": "Desert Treasure Desktop",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_dt_180x100.jpg",
    "categories": [ 
      
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  },

   {
    "title": "Vacation Station",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_er_180x100.jpg",
     "categories": [ 
      
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  },
    {
    "title": "Vacation Station",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_er_180x100.jpg",
     "categories": [ 
      
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  },
      {
    "title": "Vacation Station",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_er_180x100.jpg",
     "categories": [ 
      
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  },
{
  "title": "Hulk 25 Line",
  "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/Hulk_180x100.jpg",
  "categories": [ 
      
      {
        "id": 39,
        "name": "Popular Games"
      },
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 4,
        "name": "Jackpots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  },
   {
    "title": "Jackpot Darts",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_drts_180x100.jpg",
     "categories": [ 
      
      {
        "id": 3,
        "name": "Slots"
      },
      {
        "id": 4,
        "name": "Jackpots"
      },
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  },

  {
    "title": "Genie Hi-Lo",
    "image": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_ghl_180x100.jpg",
      "categories": [ 
      
      {
        "id": 79,
        "name": "All Games"
      }

    ]
    
  }
   

  

  // {
  //   "title": "Genie Hi-Lo",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_ghl_180x100.jpg",
  //   "desktop_categories_ids": 79,
  //   "desktop_categories": "All Games"
  // },
  // {
  //   "title": "Gladiator",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_glr_180x100.jpg",
  //   "desktop_categories_ids": "39,3,79",
  //   "desktop_categories": "Popular Games,Slots,All Games"
  // },
  // {
  //   "title": "Mr.Cashback",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc-mcb-180x100.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Great Blue",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc-bib-180x100.jpg",
  //   "desktop_categories_ids": "39,3,79",
  //   "desktop_categories": "Popular Games,Slots,All Games"
  // },
  // {
  //   "title": "Wild Games",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_WILDGAMES_180x100.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Kong: Eighth Wonder of the World",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_Kong_180x100.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Iron Man 2 - 25 Line",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/Ironman2_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Iron Man",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/IronMan_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "UK Blackjack",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_bjuk_180x100_v2.jpg",
  //   "desktop_categories_ids": "2,79",
  //   "desktop_categories": "Blackjack,All Games"
  // },
  // {
  //   "title": "21 Duel Blackjack",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_bj21d_180x100_v2.jpg",
  //   "desktop_categories_ids": "2,79",
  //   "desktop_categories": "Blackjack,All Games"
  // },
  // {
  //   "title": "Fantastic Four",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/FantasticFour_super_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "The Mummy",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_MUMMY.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Desert Treasure II",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc-dt2-180x100.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "X Men",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/Xmen_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Daredevil",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/Daredevil_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Rocky",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/sc_rky_180x100.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Hulk 50 Line",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/Hulk50_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Football Fans",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_FOOTBALL_FANS.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Hot Gems",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_HOT_GEMS.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Wings of Gold",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_WINGS_OF_GOLD.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Goddess of Life",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_GODDESS_OF_LIFE.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Vikingmania",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_GAME_VIKING_MANIA.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // },
  // {
  //   "title": "Elektra",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/Elektra_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Fantastic Four 50 Line",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/FantasticFour50_super_180x100.jpg",
  //   "desktop_categories_ids": "39,3,4,79",
  //   "desktop_categories": "Popular Games,Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Iron Man 2 50 Line",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/IronMan250_180x100.jpg",
  //   "desktop_categories_ids": "3,4,79",
  //   "desktop_categories": "Slots,Jackpots,All Games"
  // },
  // {
  //   "title": "Wild Spirit",
  //   "image_180x100": "//d37q0bzpeg751b.cloudfront.net/assets/GB/games/SC_WILDSPIRIT_180x100.jpg",
  //   "desktop_categories_ids": "3,79",
  //   "desktop_categories": "Slots,All Games"
  // }
]


		)
})

app.listen(3333);

