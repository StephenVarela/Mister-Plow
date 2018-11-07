FactoryBot.define do
  factory :weather do
    city_name {"Toronto"}
    forecast {[{"weather"=>
       {"id"=>803,
        "main"=>"Clouds",
        "description"=>"broken clouds",
        "icon"=>"04d"},
      "datetime"=>"2018-11-07 21:00:00",
      "temp"=>278.88},
     {"weather"=>
       {"id"=>802,
        "main"=>"Clouds",
        "description"=>"scattered clouds",
        "icon"=>"03n"},
      "datetime"=>"2018-11-08 00:00:00",
      "temp"=>277.97},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10n"},
      "datetime"=>"2018-11-08 03:00:00",
      "temp"=>277.68},
     {"weather"=>
       {"id"=>801,
        "main"=>"Clouds",
        "description"=>"few clouds",
        "icon"=>"02n"},
      "datetime"=>"2018-11-08 06:00:00",
      "temp"=>277.35},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10n"},
      "datetime"=>"2018-11-08 09:00:00",
      "temp"=>276.963},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-08 12:00:00",
      "temp"=>276.652},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10d"},
      "datetime"=>"2018-11-08 15:00:00",
      "temp"=>279.176},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"02d"},
      "datetime"=>"2018-11-08 18:00:00",
      "temp"=>281.061},
     {"weather"=>
       {"id"=>802,
        "main"=>"Clouds",
        "description"=>"scattered clouds",
        "icon"=>"03d"},
      "datetime"=>"2018-11-08 21:00:00",
      "temp"=>280.24},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-09 00:00:00",
      "temp"=>276.888},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-09 03:00:00",
      "temp"=>274.086},
     {"weather"=>
       {"id"=>802,
        "main"=>"Clouds",
        "description"=>"scattered clouds",
        "icon"=>"03n"},
      "datetime"=>"2018-11-09 06:00:00",
      "temp"=>273.202},
     {"weather"=>
       {"id"=>803,
        "main"=>"Clouds",
        "description"=>"broken clouds",
        "icon"=>"04n"},
      "datetime"=>"2018-11-09 09:00:00",
      "temp"=>274.681},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10n"},
      "datetime"=>"2018-11-09 12:00:00",
      "temp"=>276.313},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10d"},
      "datetime"=>"2018-11-09 15:00:00",
      "temp"=>277.888},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10d"},
      "datetime"=>"2018-11-09 18:00:00",
      "temp"=>278.484},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10d"},
      "datetime"=>"2018-11-09 21:00:00",
      "temp"=>277.349},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10n"},
      "datetime"=>"2018-11-10 00:00:00",
      "temp"=>278.52},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10n"},
      "datetime"=>"2018-11-10 03:00:00",
      "temp"=>277.857},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-10 06:00:00",
      "temp"=>275.81},
     {"weather"=>
       {"id"=>801,
        "main"=>"Clouds",
        "description"=>"few clouds",
        "icon"=>"02n"},
      "datetime"=>"2018-11-10 09:00:00",
      "temp"=>274.367},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-10 12:00:00",
      "temp"=>272.47},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01d"},
      "datetime"=>"2018-11-10 15:00:00",
      "temp"=>273.331},
     {"weather"=>
       {"id"=>600, "main"=>"Snow", "description"=>"light snow", "icon"=>"13d"},
      "datetime"=>"2018-11-10 18:00:00",
      "temp"=>275.122},
     {"weather"=>
       {"id"=>500, "main"=>"Rain", "description"=>"light rain", "icon"=>"10d"},
      "datetime"=>"2018-11-10 21:00:00",
      "temp"=>276.214},
     {"weather"=>
       {"id"=>802,
        "main"=>"Clouds",
        "description"=>"scattered clouds",
        "icon"=>"03n"},
      "datetime"=>"2018-11-11 00:00:00",
      "temp"=>275.691},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-11 03:00:00",
      "temp"=>275.072},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-11 06:00:00",
      "temp"=>274.431},
     {"weather"=>
       {"id"=>600, "main"=>"Snow", "description"=>"light snow", "icon"=>"13n"},
      "datetime"=>"2018-11-11 09:00:00",
      "temp"=>274.016},
     {"weather"=>
       {"id"=>600, "main"=>"Snow", "description"=>"light snow", "icon"=>"13n"},
      "datetime"=>"2018-11-11 12:00:00",
      "temp"=>273.536},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01d"},
      "datetime"=>"2018-11-11 15:00:00",
      "temp"=>275.231},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01d"},
      "datetime"=>"2018-11-11 18:00:00",
      "temp"=>276.113},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01d"},
      "datetime"=>"2018-11-11 21:00:00",
      "temp"=>275.763},
     {"weather"=>
       {"id"=>800, "main"=>"Clear", "description"=>"clear sky", "icon"=>"01n"},
      "datetime"=>"2018-11-12 00:00:00",
      "temp"=>274.546},
     {"weather"=>
       {"id"=>801,
        "main"=>"Clouds",
        "description"=>"few clouds",
        "icon"=>"02n"},
      "datetime"=>"2018-11-12 03:00:00",
      "temp"=>272.883},
     {"weather"=>
       {"id"=>803,
        "main"=>"Clouds",
        "description"=>"broken clouds",
        "icon"=>"04n"},
      "datetime"=>"2018-11-12 06:00:00",
      "temp"=>271.607},
     {"weather"=>
       {"id"=>802,
        "main"=>"Clouds",
        "description"=>"scattered clouds",
        "icon"=>"03n"},
      "datetime"=>"2018-11-12 09:00:00",
      "temp"=>270.581},
     {"weather"=>
       {"id"=>803,
        "main"=>"Clouds",
        "description"=>"broken clouds",
        "icon"=>"04n"},
      "datetime"=>"2018-11-12 12:00:00",
      "temp"=>270.323},
     {"weather"=>
       {"id"=>802,
        "main"=>"Clouds",
        "description"=>"scattered clouds",
        "icon"=>"03d"},
      "datetime"=>"2018-11-12 15:00:00",
      "temp"=>274.584},
     {"weather"=>
       {"id"=>803,
        "main"=>"Clouds",
        "description"=>"broken clouds",
        "icon"=>"04d"},
      "datetime"=>"2018-11-12 18:00:00",
      "temp"=>276.105}]}
  end
end
