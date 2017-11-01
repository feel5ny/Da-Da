
exports.up = function(knex, Promise) {
  return knex('recipe').insert([
    {recipe_id: 1, recipe_name_ko: "저탄수화물 또띠아 피자", recipe_name_en: "low-carb tortilla pizza", recipe_level: "쉬움", recipe_time: "20분", recipe_carb: 5, recipe_protein: 21, recipe_fat: 74, recipe_ingredient: '[{"id":0,"name":"달걀","num":2,"unit":"개"},{"id":1,"name":"달걀흰자","num":2,"unit":"개"},{"id":2,"name":"크림치즈","num":170,"unit":"g"},{"id":3,"name":"소금","num":0.25,"unit":"t스푼"},{"id":4,"name":"차전자피 분말","num":1,"unit":"t스푼"},{"id":5,"name":"코코넛 밀가루","num":1,"unit":"T스푼"},{"id":6,"name":"토마토 소스","num":8,"unit":"T스푼"},{"id":7,"name":"모짜렐라 치즈","num":2,"unit":"컵"},{"id":8,"name":"말린 바질","num":2,"unit":"t스푼"}]', recipe: '[{"step":1, "content": "오븐을 200도(섭씨)로 예열한다."}, {"step":2, "content": "계란과 계란흰자를 거품을 내며 섞어주고, 핸드믹서를 이용해 몇분간 계속 저어주다가 크림치를 추가해 반죽이 부드러워질 때까지 섞어준다."}, {"step":3, "content": "차전자피 분말과 코코넛 밀가루를 작은 볼에 합쳐담는다. 같이 담은 분말을 한숟가락을 반죽에 넣고 계속해서 저어준다.반죽을 몇분간 휴지시킨다."}, {"step":4, "content": "유산지 2장을 깔고, 스파츌라를 이용해 반죽을 얇게 펴준다."}, {"step":5, "content": "5분간 윗면을 굽고, 또띠아 테두리가 갈색으로 변할때 까지 굽는다."}, {"step":6, "content": "오븐을 225도(섭씨) 예열한다."}, {"step":7, "content": "또띠아에 토마토소스를 1-2숟가락을 펴발라 준다. 말린바질을 조금씩만 뿌려준 후, 모짜렐라치즈를 적당히 얹는다."}, {"step":8, "content": "오븐에 넣고 모짜렐라 치즈가 녹을때 까지 굽는다."}]', recipe_serving: 4, recipe_from: "https://www.dietdoctor.com/recipes/low-carb-tortilla-pizza"},
    {recipe_id: 2, recipe_name_ko: "훈제연어 샌드위치", recipe_name_en: "smoked salmon sandwich", recipe_level: "쉬움", recipe_time: "15분", recipe_carb: 5, recipe_protein: 37.5, recipe_fat: 205, recipe_ingredient: '[{"id":0,"name":"달걀","num":4,"unit":"개"},{"id":1,"name":"헤비 크림","num":2,"unit":"T스푼"},{"id":2,"name":"고춧가루","num":1,"unit":"t스푼"},{"id":3,"name":"저탄수화물 빵","num":2,"unit":"조각"},{"id":4,"name":"버터","num":2,"unit":"T스푼"},{"id":5,"name":"양상추","num":5,"unit":"g"},{"id":6,"name":"훈제연어","num":85,"unit":"g"}]', recipe: '[{"step":1, "content": "달걀과 크림을 한곳에 합쳐 거품을 내어 저어준다."}, {"step":2, "content": "버터를 한 숟가락을 중강불의 팬에 넣어준다. 달걀 혼합물을 팬에 부은 후, 익을 때 까지 저어주며 섞은 후, 불을 끈다."}, {"step":3, "content": "고춧가루를 넣고 섞는다."}, {"step":4, "content": "저탄수화물 빵을 구워준다."}, {"step":5, "content": "버터를 한겹 발라준다."}, {"step":6, "content": "빵위에 양상추를 깔고, 요리한 달걀을 얹은후, 훈제연어를 올려준다."}]', recipe_serving: 2, recipe_from: "https://www.dietdoctor.com/recipes/smoked-salmon-sandwich"},
    {recipe_id: 3, recipe_name_ko: "가지 튀김", recipe_name_en: "eggplant fries", recipe_level: "중간", recipe_time: "30분", recipe_carb: 5, recipe_protein: 8.75, recipe_fat: 48.75, recipe_ingredient: '[{"id":0,"name":"달걀","num":2,"unit":"개"},{"id":1,"name":"가지","num":2,"unit":"개"},{"id":2,"name":"아몬드가루","num":2,"unit":"컵"},{"id":3,"name":"카옌페퍼","num":1,"unit":"t스푼"},{"id":4,"name":"코코넛 오일","num":2,"unit":"T스푼"}]', recipe: '[{"step":1, "content": "오븐을 200도(섭씨)로 예열한다."}, {"step":2, "content": "가지 껍질을 벗긴후, 감자튀김 모양으로 잘라준다."}, {"step":3, "content": "아몬드가루, 카옌페퍼, 소금,후추를 한데 섞어준다. 달걀을 따로 달걀물을 만든다."}, {"step":4, "content": "가지조각을 달걀물에 담근후, 아몬드가루 혼합물을 묻혀준다. 다시 달걀물에 담근후, 다시 아몬드가루 혼합물을 다시 묻혀준다."}, {"step":5, "content": "유산지를 깔고, 가지조각을 }]', recipe_serving: 8, recipe_from: "https://www.dietdoctor.com/recipes/eggplant-fries"},
    {recipe_id: 4, recipe_name_ko: "저탄수화물 호박스프", recipe_name_en: "low-carb pumpkin soup", recipe_level: "쉬움", recipe_time: "55분", recipe_carb: 15, recipe_protein: 6.3, recipe_fat: 195, recipe_ingredient: '[{"id":0,"name":"달걀","num":2,"unit":"개"},{"id":1,"name":"가지","num":2,"unit":"개"},{"id":2,"name":"아몬드가루","num":2,"unit":"컵"},{"id":3,"name":"카옌페퍼","num":1,"unit":"t스푼"},{"id":4,"name":"코코넛 오일","num":2,"unit":"T스푼"}]', recipe: '[{"step":1, "content": "오븐을 200도(섭씨)로 예열한다."}, {"step":2, "content": "재료를 오븐용 그릇에 담는다."}, {"step":3, "content": "오븐에서 25분~30분간 굽는다. 원한다면 팬에 볶아도 좋다."}, {"step":4, "content": "구운 재료를 냄비에 담고 야채스톡을 넣어 끓인다."}, {"step":5, "content": "버터를 조각내서 넣어준다. 그 후, 핸드블렌더로 재료를 섞어준후, 라임을 즙을내어 향을 낸다."}]', recipe_serving: 4, recipe_from: "https://www.dietdoctor.com/recipes/low-carb-pumpkin-soup"},
    {recipe_id: 5, recipe_name_ko: "데리야키 치킨", recipe_name_en: "chicken teriyaki", recipe_level: "중간", recipe_time: "40분", recipe_carb: 228, recipe_protein: 91, recipe_fat: 18, recipe_ingredient: '[{"id":0,"name":"닭다리살 (뼈 없는 고기)","num":2,"unit":"개"},{"id":1,"name":"녹말가루","num":1,"unit":"스푼"},{"id":2,"name":"식용유","num":1,"unit":"스푼"},{"id":3,"name":"사과주스","num":50,"unit":"ml"},{"id":4,"name":"생강","num":5,"unit":"g"},{"id":5,"name":"간장","num":3,"unit":"큰술"},{"id":6,"name":"설탕","num":2,"unit":"큰술"},{"id":7,"name":"식초","num":1,"unit":"큰술"}]', recipe: '[{"step":1, "content": "닭다리살을 도마 위에 펼쳐 놓고 한가운데 오목한 부분에서 반으로 잘라 4토막으로 만듭니다."}, {"step":2, "content": "고기 두께를 균등하게 하기 위해 얇은 부분에 맞추어 두꺼운 부분을 안에서 바깥쪽으로 깔집을 넣어 원래 고기의 2배 정도 크기로 폅니다."}, {"step":3, "content": "4토막을 모두 얇게 펴고 녹말가루를 듬뿍 뿌린 뒤 덧가루는 털어냅니다."}, {"step":4, "content": "작은 그릇에 사과주스, 간장, 설탕, 식초, 간 생강을 넣고 섞어 데리야키 소스를 만들어 놓습니다."}, {"step":5, "content": "큰 프라이팬에 기름을 두르고 껍질을 밑으로 해서 닭고기를 나란히 놓고 가끔 움직이면서 중불에서 노릇하게 굽습니다. 뒤집어서 뚜껑을 덮고 약한 불로 4 분 정도 굽습니다. 대나무 꼬치나 포크로 찔러보아 맑은 국물이 나오면 일단 프라이팬에서 닭고기를 꺼냅니다."}, {"step":6, "content": "프라이팬의 기름을 닦아내고 만들어 놓은 소스를 넣어 데워지면 구운 닭고기를 넣어 버무립니다."}, {"step":7, "content": "소스가 걸쭉해져 닭고기에 잘 버물러지면 껍질을 위로 해서 꺼내 조금 식힌 뒤 1cm 폭으로 자릅니다. 녹색 야채와 레몬을 곁들여 접시에 담으면 완성입니다."}]', recipe_serving: 4, recipe_from: "https://www3.nhk.or.jp/nhkworld/ko/radio/cooking/20170428.html"},
    {recipe_id: 6, recipe_name_ko: "오야코돈", recipe_name_en: "oyakodon", recipe_level: "쉬움", recipe_time: "30분", recipe_carb: 464, recipe_protein: 96, recipe_fat: 23, recipe_ingredient: '[{"id":0,"name":"닭다리살 (뼈 없는 고기)","num":160,"unit":"g"},{"id":1,"name":"양파","num":100,"unit":"g"},{"id":2,"name":"밥","num":4,"unit":"공기"},{"id":3,"name":"달걀","num":3,"unit":"개"},{"id":4,"name":"물","num":1,"unit":"컵"},{"id":5,"name":"간장","num":2,"unit":"큰술"},{"id":6,"name":"설탕","num":1,"unit":"큰술"}]', recipe: '[{"step":1, "content": "미리 밥을 지어 놓는다."}, {"step":2, "content": "닭고기와 양파를 썬다. 닭고기는 먼저 폭 2센티미터 정도로 가늘게 썬 다음 다시 두께 5밀리미터로 저민다. 양파는 폭 5밀리미터 정도로 얇게 썬다. 달걀 3개를 볼에다 풀어둔다."}, {"step":3, "content": "맛국물 재료를 모두 프라이팬에 넣고 끓인다. "}, {"step":4, "content": "닭고기와 양파가 한데 뭉치지 않도록 프라이팬 전체에 잘 펴 놓는다. 뚜껑을 덮고 약한 불에서 4분 끓인다. "}, {"step":5, "content": "잘 끓으면 뚜껑을 열고 달걀을 팬에 둘러가면서 붓는다. 달걀이 반숙 정도로 익으면 불을 끄고 1, 2분 뜸을 들인다."}, {"step":6, "content": "큼직한 사발에 따뜻한 밥을 담고, 그 위에 건더기를 얹어 맛국물을 붓는다."}]', recipe_serving: 4, recipe_from: "https://www3.nhk.or.jp/nhkworld/ko/radio/cooking/20110506.html"},
    {recipe_id: 7, recipe_name_ko: "미이라 핫도그", recipe_name_en: "keto mummy dogs", recipe_level: "쉬움", recipe_time: "45분", recipe_carb: 5, recipe_protein: 43.3, recipe_fat: 141.75, recipe_ingredient: '[{"id":0,"name":"아몬드 가루","num":8,"unit":"T스푼"},{"id":1,"name":"코코넛 밀가루","num":4,"unit":"T스푼"},{"id":2,"name":"소금","num":0.5,"unit":"t스푼"},{"id":3,"name":"베이킹파우더","num":1,"unit":"t스푼"},{"id":4,"name":"버터","num":75,"unit":"g"},{"id":5,"name":"모짜렐라 치즈","num":1.5,"unit":"컵"},{"id":6,"name":"달걀","num":1,"unit":"개"},{"id":7,"name":"핫도그 소세지","num":450,"unit":"g"}]', recipe: '[{"step":1, "content": "오븐을 175도(섭씨)로 예열한다."}, {"step":2, "content": "치즈와 버터를 약불에 녹인다."}, {"step":3, "content": "나무 수저로 반죽이 유연해 질때까지 섞는다. 몇 분이 소요된다."}, {"step":4, "content": "불에서 팬을 내린 후, 계란을 넣고 섞는다. 가루 혼합물을 넣고 섞어준다."}, {"step":5, "content": "20x35cm 사이즈의 직사각형안에 고루 펴준다."}, {"step":6, "content": "1인치 보다 작은 너비로 8조각으로 잘라준다."}, {"step":7, "content": "핫도그 소세지에 도우를 말아준 후, 계란흰자를 겉면에 칠한다."}, {"step":8, "content": "유산지에 놓고 15분에서 20분간 도우가 금색빛 갈색이 될 때까지 구워준다."}]', recipe_serving: 4, recipe_from: "https://www.dietdoctor.com/recipes/keto-mummy-dogs"},
    {recipe_id: 8, recipe_name_ko: "시저 샐러드", recipe_name_en: "Caesar salad", recipe_level: "쉬움", recipe_time: "35분", recipe_carb: 5, recipe_protein: 50, recipe_fat: 197.5, recipe_ingredient: '[{"id":0,"name":"닭가슴살","num":275,"unit":"g"},{"id":1,"name":"올리브유","num":1,"unit":"T스푼"},{"id":2,"name":"소금","num":0.5,"unit":"t스푼"},{"id":3,"name":"후추","num":0.5,"unit":"t스푼"},{"id":4,"name":"베이컨","num":150,"unit":"g"},{"id":5,"name":"로메인 상추","num":1.5,"unit":"개"},{"id":6,"name":"파마산 치즈","num":57,"unit":"g"},{"id":7,"name":"마요네즈","num":0.5,"unit":"컵"},{"id":8,"name":"디종 머스터드","num":1,"unit":"T스푼"},{"id":9,"name":"레몬","num":0.5,"unit":"개"}]', recipe: '[{"step":1, "content": "마요네즈, 디종 머스터드, 레몬, 파마산치즈,  소금, 후추를 한데 섞고, 냉장고에 넣어둔다."}, {"step":2, "content": "오븐을 200도(섭씨)로 예열한다. 닭가슴살을 오븐용 그릇에 넣는다."}, {"step":3, "content": "닭가슴살에 후추와 소금으로 밑간을 하고, 올리브유를 바른다. 오븐에 20분간 밑간한 고기를 굽는다."}, {"step":4, "content": "베이컨이 바삭해질 때까지 굽는다. 양상추위에 구운 베이컨과 닭가슴살을 올린다."}, {"step":5, "content": "냉장고에 넣어둔 드레싱을 뿌리고, 파마산치즈를 뿌려 마무리한다."}]', recipe_serving: 2, recipe_from: "https://www.dietdoctor.com/recipes/keto-caesar-salad"},
    {recipe_id: 9, recipe_name_ko: "베리 팬케익", recipe_name_en: "Keto pancakes with berries and whipped cream", recipe_level: "쉬움", recipe_time: "25분", recipe_carb: 5, recipe_protein: 15, recipe_fat: 103.75, recipe_ingredient: '[{"id":0,"name":"달걀","num":4,"unit":"개"},{"id":1,"name":"코티지 치즈","num":200,"unit":"g"},{"id":2,"name":"차전자피 가루","num":1,"unit":"T스푼"},{"id":3,"name":"버터 또는 코코넛 오일","num":60,"unit":"g"},{"id":4,"name":"블루베리 혹은 딸기","num":8,"unit":"T스푼"}]', recipe: '[{"step":1, "content": "베리를 제외한 모든 재료를 한데 섞어 반죽을 만든다. 5분동안 휴지 시킨다."}, {"step":2, "content": " 버터나 오일을 달군팬에 두른다. 팬케익 반죽을 붓고 중불에서 3~4분간 각 면을 익힌다. 조심히 뒤집어서 익힌다."}, {"step":3, "content": "베리를 얹어 마무리한다. 헤비크림을 곁들여도 좋다."}]', recipe_serving: 4, recipe_from: "https://www.dietdoctor.com/recipes/keto-pancakes-berries-whipped-cream"},
    {recipe_id: 10, recipe_name_ko: "스윗 윙", recipe_name_en: "sweet and sticky chicken wings", recipe_level: "쉬움", recipe_time: "50분", recipe_carb: 10, recipe_protein: 57, recipe_fat: 75, recipe_ingredient: '[{"id":0,"name":"닭 윙","num":900,"unit":"g"},{"id":1,"name":"소금","num":1.5,"unit":"t스푼"},{"id":2,"name":"코코넛 아미노","num":0.75,"unit":"컵"},{"id":3,"name":"생강 갈은 것","num":0.25,"unit":"t스푼"},{"id":4,"name":"양파 가루","num":0.25,"unit":"t스푼"},{"id":5,"name":"마늘 가루","num":0.75,"unit":"t스푼"}]', recipe: '[{"step":1, "content": "오븐을 230도(섭씨)로 예열한다."}, {"step":2, "content": "윙을 두꺼운 면이 위에 가도록 유산지위에 깐다."}, {"step":3, "content": "소금을 윙에 골고루 뿌려준다."}, {"step":4, "content": "윙을 45분간 구워준다."}, {"step":5, "content": "윙이 다 구워지기 12분 남을 때, 소스만드는 것을 시작한다."}, {"step":6, "content": "큰 냄비에 중불로 예열한후, 코코넛 아미노를 넣는다."}, {"step":7, "content": "생강가루, 양파가루, 마늘가루를 넣고 재료가 끓어오르면 저어준다. 어느정도 끓으면 약불로 줄이고 따듯하게만 해준다."}, {"step":8, "content": "윙이 구워지면 소스팬에 넣고 버무려준 후, 그릇에 옮겨 담는다."}]', recipe_serving: 4, recipe_from: "https://www.dietdoctor.com/recipes/sweet-and-sticky-chicken-wings"},
    {recipe_id: 11, recipe_name_ko: "떡볶이", recipe_name_en: "tteokbokki", recipe_level: "쉬움", recipe_time: "20분", recipe_carb: 60.5, recipe_protein: 7.6, recipe_fat: 3.5, recipe_ingredient: '[{"id":0,"name":"떡볶이 떡","num":0.5,"unit":"줌"},{"id":1,"name":"어묵","num":1,"unit":"장"},{"id":2,"name":"양배추","num":0.125,"unit":"통"},{"id":3,"name":"무","num":0.25,"unit":"개"},{"id":4,"name":"물","num":0.25,"unit":"L"},{"id":5,"name":"고추장","num":1,"unit":"T스푼"},{"id":6,"name":"고춧가루","num":0.5,"unit":"T스푼"},{"id":7,"name":"카레가루","num":1,"unit":"T스푼"},{"id":8,"name":"후추","num":1,"unit":"T스푼"}]', recipe: '[{"step":1, "content": "양배추는 먹기 좋은 크기로 자르고 무를 채 썰어 준비한다."}, {"step":2, "content": "볼에 고추장, 고추가루, 라면스프, 카레가루, 후추를 섞어 양념장을 만든다."}, {"step":3, "content": "팬에 양배추와 물을 넣고 끓인다."}, {"step":4, "content": "양배추가 살짝 숨이 죽으면 양념장, 무채, 떡볶이떡, 어묵 순으로 넣는다."}, {"step":5, "content": "떡과 무가 익으면 불을 끈다."}]', recipe_serving: 1, recipe_from: "http://m.post.naver.com/viewer/postView.nhn?volumeNo=8925168&memberNo=11566067&vType=VERTICAL"},
    {recipe_id: 12, recipe_name_ko: "오므라이스", recipe_name_en: "omelet rice", recipe_level: "쉬움", recipe_time: "30분", recipe_carb: 184, recipe_protein: 60, recipe_fat: 60, recipe_ingredient: '[{"id":0,"name":"따뜻한 밥","num":600,"unit":"g"},{"id":1,"name":"양파","num":120,"unit":"g"},{"id":2,"name":"닭고기","num":120,"unit":"g"},{"id":3,"name":"버터","num":30,"unit":"g"},{"id":4,"name":"토마토 케첩","num":100,"unit":"ml"},{"id":5,"name":"계란","num":6,"unit":"개"},{"id":6,"name":"식용유","num":40,"unit":"ml"}]', recipe: '[{"step":1, "content": "양파와 닭고기를 1센티미터 두께로 네모지게 자른 뒤, 닭고기에 소금과 후추를 뿌려둡니다."}, {"step":2, "content": "프라이팬에 버터를 녹인 다음 양파를 넣고 약한 불에 투명해질 때까지 볶은 후, 닭고기를 넣고 속이 익을 때까지 잘 볶습니다. 그 후 토마토케첩을 넣고 볶습니다."}, {"step":3, "content": "불을 끄고 따뜻한 밥을 넣어 잘 섞습니다. 그 후 중간 불로 볶으면서 후추를 약간 뿌려 맛을 냅니다. 다 볶은 치킨라이스를 4등분으로 나눠 1인분씩 접시에 담은 후, 랩을 사용해 아몬드형태로 예쁘게 모양을 냅니다."}, {"step":4, "content": "계란 6개를 깨고 알끈을 제거한 뒤 소금을 약간 넣고 풉니다. 다 푼 계란을 4등분으로 나눠 놓습니다."}, {"step":5, "content": "직경 20센티미터 정도의 프라이팬을 중간불로 예열하고 식용유를 두 술 두른 뒤, 계란 1인분을 넣습니다. 포크로 재빨리 한두 번 휘저은 뒤, 프라이팬을 10센티미터정도 들어올려 계란을 균일하게 펼칩니다. 계란이 다 익으면 불을 끄고 아몬드 형태로 만든 치킨라이스를 한가운데에 놓습니다."}, {"step":6, "content": "포크로 계란을 맞은편에서 자신의 몸쪽으로 들어올려 치킨라이스를 덮습니다. 이어서 자신의 몸쪽에서 맞은편으로 치킨라이스를 덮습니다. 그리고 프라이팬에 접시를 올려 놓고 프라이팬을 뒤집어서 접시에 오므라이스를 담습니다. 페이퍼타월로 형태를 가다듬은 후, 마지막으로 케첩을 뿌립니다."}]', recipe_serving: 4, recipe_from: "https://www3.nhk.or.jp/nhkworld/ko/radio/cooking/20140404.html"},
    {recipe_id: 13, recipe_name_ko: "마파두부", recipe_name_en: "mapa tofu", recipe_level: "중간", recipe_time: "60분", recipe_carb: 40, recipe_protein: 60, recipe_fat: 52, recipe_ingredient: '[{"id":0,"name":"연두부","num":300,"unit":"g"}, {"id":1,"name":"홍고추","num":1,"unit":"개"}, {"id":2,"name":"대파","num":10,"unit":"g"}, {"id":3,"name":"다진마늘","num":10,"unit":"g"}, {"id":4,"name":"다진생강","num":2,"unit":"g"}, {"id":5,"name":"돼지고기","num":50,"unit":"g"}, {"id":6,"name":"청주","num":15,"unit":"ml"}, {"id":7,"name":"간장","num":15,"unit":"ml"}, {"id":8,"name":"물","num":200,"unit":"ml"}, {"id":9,"name":"굴소스","num":5,"unit":"g"}, {"id":10,"name":"치킨파우저","num":5,"unit":"g"}, {"id":11,"name":"설탕","num":2,"unit":"g"}, {"id":12,"name":"녹말물","num":1,"unit":"큰술"}, {"id":13,"name":"고추기름","num":30,"unit":"ml"}]', recipe: '[{"step":1, "content": "두부는 사방 1.5cm 크기로 썬다."}, {"step":2, "content": "홍고추는 다진다."}, {"step":3, "content": "끓는 소금물에 두부를 넣고 데친 후 체에 밭쳐 물기를 뺀다.(두부를 데칠 때 소금을 넣으면 두부가 단단해지면서 모양이 흐트러지지 않는다.)"}, {"step":4, "content": "달군 팬에 고추기름을 두르고 대파, 마늘, 홍고추, 생강을 볶다가 두반장을 넣고 살짝 볶는다."}, {"step":5, "content": "다진 돼지고기를 넣고 볶아 거의 익으면 청주와 간장을 넣고 볶는다. 물을 붓고 끓어오르면 연두부를 넣어 끓인다."}, {"step":6, "content": "치킨 파우더, 굴소스, 후춧가루를 넣고 더 끓인다."}, {"step":7, "content": "녹말물을 조금씩 넣어 바르게 저어가며 끓인다. 되직한 농도가 되면 불을 끈다."}]', recipe_serving: 2, recipe_from: "http://terms.naver.com/entry.nhn?docId=1988416&cid=48164&categoryId=48204"},
    {recipe_id: 14, recipe_name_ko: "만두", recipe_name_en: "dumpling", recipe_level: "중간", recipe_time: "60분", recipe_carb: 50, recipe_protein: 16, recipe_fat: 21, recipe_ingredient: '[{"id":0,"name":"쇠고기","num":70,"unit":"g"}, {"id":1,"name":"두부","num":150,"unit":"g"}, {"id":2,"name":"숙주나물","num":50,"unit":"g"}, {"id":3,"name":"당면","num":100,"unit":"g"}, {"id":4,"name":"돼지고기","num":70,"unit":"g"}, {"id":5,"name":"만두피","num":15,"unit":"장"}, {"id":6,"name":"부추","num":40,"unit":"g"}, {"id":7,"name":"양파","num":50,"unit":"g"}, {"id":8,"name":"달걀","num":1,"unit":"개"}, {"id":9,"name":"대파","num":10,"unit":"g"}, {"id":10,"name":"마늘","num":5,"unit":"g"}]', recipe: '[{"step":1, "content": "두부 칼등으로 눌러 으깬 후 젖은 면보에 넣고 물기를 꼭 짠다."}, {"step":2, "content": "끓는 물에 넣어 삶아 체에 밭쳐 물기를 뺀 후 1cm 폭으로 썬다. 숙주는 끓는 물에 넣고 데친다. 체에 밭쳐 한 김 식힌 후 물기를 꼭 짜고 1cm 폭으로 썬다."}, {"step":3, "content": "돼지고기와 쇠고기는 곱게 다진다. 달걀은 잘 풀어 달걀물을 만든다."}, {"step":4, "content": "큰 볼에 두부, 숙주, 당면, 돼지고기, 쇠고기, 달걀, 대파, 마늘, 후춧가루, 참기름, 소금, 깨소금을 넣고 잘 치대어 만두소를 만든다."}, {"step":5, "content": "만두피에 만두소를 올린 후 가장자리에 물을 바른다. 반으로 접어 붙인 후 양끝을 모아 물을 묻히고 붙여 만두를 빚는다."}, {"step":6, "content": "김이 오른 찜기에 젖은 면보를 깔고 만두를 넣고 10~15분간 찐다."}]', recipe_serving: 1, recipe_from: "http://terms.naver.com/entry.nhn?docId=1988257&cid=48162&categoryId=48199"},
    {recipe_id: 15, recipe_name_ko: "시홍스차오지단", recipe_name_en: "Scrambled eggs with tomatoes", recipe_level: "중간", recipe_time: "15분", recipe_carb: 40, recipe_protein: 22, recipe_fat: 8, recipe_ingredient: '[{"id":0,"name":"토마토","num":2,"unit":"개"}, {"id":1,"name":"계란","num":2,"unit":"개"}, {"id":2,"name":"물","num":1,"unit":"t"}, {"id":3,"name":"식물성 오일","num":2,"unit":"t"}, {"id":4,"name":"다진마늘","num":1/2,"unit":"t"}, {"id":5,"name":"청주","num":1,"unit":"t"}, {"id":6,"name":"설탕","num":1/2,"unit":"t"}]', recipe: '[{"step":1, "content": "토마토는 웨지 모양으로 자른다. 1개당 8등분에서 12등분 정도로 자르면 된다."}, {"step":2, "content": "계란은 청주 1t와 소금 2-3꼬집을 넣고 잘 풀어놓는다."}, {"step":3, "content": "오일 1T를 두른 팬을 달군 뒤 풀어놓은 계란을 부운다"}, {"step":4, "content": "바로 주걱 혹은 젓가락으로 휘휘 저어가며 익힌다. 너무 바싹 익히지 말고 촉촉한 상태로 마무리."}, {"step":5, "content": "스크램블한 계란은 다른 그릇에 옮겨놓고 오일을 1T 정도 더 두르고 다진 마늘을 볶아 향을 낸다."}, {"step":6, "content": "토마토를 넣고 볶다가 물 1T와 설탕을 넣고 계속 볶아준다. 토마토에서 물이 많이 나오는 경우 물은 안 넣어도 되고 물기가 별로 없으면 1-2T 정도 추가한다. 소금, 후추로 간한다."}, {"step":7, "content": "아까 따로 덜어놓은 계란을 넣고 참기름 몇 방울 넣은 뒤 섞어주면 완성!"}, {"step":8, "content": "그릇에 옮긴 뒤 다진 파를 뿌려서 낸다."}]', recipe_serving: 2, recipe_from: "http://www.10000recipe.com/recipe/6829371"}
  ])
};

exports.down = function(knex, Promise) {
  return knex('recipe').truncate()
};