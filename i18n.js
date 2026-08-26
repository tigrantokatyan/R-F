/* Rich & Fabulous — EN / ՀԱՅ / РУС.
   Keyed by the exact English source string so the markup stays English and editable.
   Applied over text nodes + a few attributes, re-applied on every re-render. */
(function () {
  var LANGS = ['en', 'hy', 'ru'];
  var D = {
    /* ---- nav + chrome ---- */
    "About Us": ["Մեր մասին", "О нас"],
    "Shop": ["Խանութ", "Магазин"],
    "Contact": ["Կապ", "Контакты"],
    "Sign in": ["Մտնել", "Войти"],
    "Sign out": ["Դուրս գալ", "Выйти"],
    "Bag": ["Պայուսակ", "Корзина"],
    "Account": ["Հաշիվ", "Аккаунт"],
    "Signed in as": ["Մուտք եք գործել որպես", "Вы вошли как"],
    "Your bag": ["Ձեր պայուսակը", "Ваша корзина"],
    "← Home": ["← Գլխավոր", "← Главная"],
    "Currency": ["Արժույթ", "Валюта"],
    "Close": ["Փակել", "Закрыть"],

    /* ---- auth ---- */
    "Members": ["Անդամներին", "Участникам"],
    "Sign in to": ["Մտեք", "Войдите в"],
    "your bag": ["ձեր պայուսակ", "вашу корзину"],
    "Your bag, order history and saved sizes live behind one door.": ["Ձեր պայուսակը, պատվերների պատմությունը և պահված չափսերը մեկ դռան հետևում են։", "Корзина, история заказов и сохранённые размеры — за одной дверью."],
    "Browsing is open to everyone. The bag opens once you sign in.": ["Դիտելը բաց է բոլորի համար։ Պայուսակը բացվում է մուտք գործելուց հետո։", "Смотреть могут все. Корзина открывается после входа."],
    "Email": ["Էլ. հասցե", "Эл. почта"],
    "Password": ["Գաղտնաբառ", "Пароль"],
    "New here?": ["Նոր եք այստեղ?", "Впервые здесь?"],
    "Create an account": ["Ստեղծել հաշիվ", "Создать аккаунт"],

    /* ---- hero ---- */
    "Premium Collection": ["Պրեմիում հավաքածու", "Премиальная коллекция"],
    "Stylish, bold and comfortable. Every detail is important in the outfit.": ["Ոճային, համարձակ և հարմարավետ։ Հանդերձանքում կարևոր է ամեն մանրուք։", "Стильно, смело и удобно. В образе важна каждая деталь."],
    "Shop the collection": ["Դիտել հավաքածուն", "Смотреть коллекцию"],
    "This season is": ["Այս սեզոնը՝", "Этот сезон —"],
    "Stylish": ["Ոճային", "Стильный"],
    "Bold": ["Համարձակ", "Смелый"],
    "Comfortable": ["Հարմարավետ", "Удобный"],

    /* ---- marquees ---- */
    "More than a T-shirt. It’s the Rich & Fabulous way": ["Ավելին, քան շապիկ։ Սա Rich & Fabulous ոգին է", "Больше, чем футболка. Это стиль Rich & Fabulous"],
    "You’re the one who sets the trends": ["Դու ես, ով թելադրում է միտումները", "Тренды задаёшь ты"],
    "Have it. Wear it. Love it": ["Ունեցիր։ Կրիր։ Սիրիր", "Купи. Носи. Люби"],
    "Worldwide shipping": ["Առաքում ամբողջ աշխարհով", "Доставка по всему миру"],
    "45 countries": ["45 երկիր", "45 стран"],
    "Family-run since 2022": ["Ընտանեկան գործ 2022-ից", "Семейное дело с 2022 года"],
    "Made in the USA": ["Արտադրված ԱՄՆ-ում", "Сделано в США"],
    "Shipping to 45 countries": ["Առաքում 45 երկիր", "Доставка в 45 стран"],
    "A brand you can trust": ["Ապրանքանիշ, որին կարելի է վստահել", "Бренд, которому можно доверять"],

    /* ---- house code ---- */
    "The house code": ["Ընկերության սկզբունքները", "Кодекс компании"],
    "Four principles": ["Չորս սկզբունք", "Четыре принципа"],
    "behind every piece": ["ամեն իրի հետևում", "за каждой вещью"],
    "Small studio, long habits. This is what we hold to, from the first pattern block to the box on your doorstep.": ["Փոքր արվեստանոց, կայուն ավանդույթներ։ Սրան ենք հավատարիմ՝ առաջին ձևվածքից մինչև ձեր դռանը հասնող տուփը։", "Небольшая студия, давние традиции. Это то, чем мы дорожим: от первой выкройки до коробки у вашей двери."],
    "Comfort is": ["Հարմարավետությունը՝", "Комфорт проверяется"],
    "the first fitting": ["առաջին չափելիքն է", "на первой примерке"],
    "If it cannot be worn from a morning meeting to a late dinner, it does not leave the studio. Every block is tested on real bodies before it becomes a size run.": ["Եթե հագուստը հնարավոր չէ կրել առավոտյան հանդիպումից մինչև ուշ ընթրիք, այն արվեստանոցից դուրս չի գալիս։ Մինչ արտադրության հանձնելը, յուրաքանչյուր ձևվածք նախ փորձարկվում է իրական մարդկանց վրա։", "Если вещь нельзя носить с утренней встречи до позднего ужина, она не покидает студию. Каждую выкройку мы тестируем на реальных людях перед запуском всей линейки размеров."],
    "Small runs,": ["Փոքր խմբաքանակներ,", "Малые партии,"],
    "no leftovers": ["առանց ավելցուկի", "без остатков"],
    "We cut in limited numbers and restock what earns it. Nothing is made to sit in a warehouse, and nothing is discounted into meaninglessness.": ["Կարում ենք սահմանափակ քանակով և վերարտադրում ենք միայն արժանիները։ Ոչինչ չի ստեղծվում պահեստում նստելու համար, և ոչինչ չի էժանացվում մինչև անիմաստություն։", "Мы шьем ограниченными партиями и перевыпускаем только то, что действительно этого заслуживает. Ни одна вещь не создается для пыли на складе, и ничто не обесценивается постоянными скидками."],
    "One family,": ["Մեկ ընտանիք,", "Одна семья,"],
    "one standard": ["մեկ չափանիշ", "один стандарт"],
    "The people who answer your message are the people who packed your parcel. Since 2022 the whole thing has stayed in the family, on purpose.": ["Ձեր հաղորդագրությանը պատասխանողները նույն մարդիկ են, ովքեր փաթեթավորել են ձեր ծրարը։ 2022-ից ի վեր ամեն ինչ մնում է ընտանիքում՝ գիտակցաբար։", "Вам отвечают те же люди, что упаковали вашу посылку. С 2022 года всё осознанно остаётся в семье."],
    "Colour you can": ["Գույն, որը կարող եք", "Цвет, который можно"],
    "keep wearing": ["շարունակել կրել", "носить и дальше"],
    "Shades are chosen to live together across seasons — so a piece bought this year still belongs beside the next one.": ["Երանգները ընտրվում են այնպես, որ համադրվեն տարվա բոլոր եղանակներին, որպեսզի այս տարի գնված հագուստը կատարյալ լրացնի հաջորդին։", "Оттенки подбираются так, чтобы сочетаться между собой из сезона в сезон. Поэтому вещь, купленная в этом году, будет идеально дополнять следующую."],
    "See the full collection": ["Տեսնել ամբողջ հավաքածուն", "Смотреть всю коллекцию"],

    /* ---- story ---- */
    "About us — est. 2022": ["Մեր մասին — հիմնադրվել է 2022-ին", "О нас — с 2022 года"],
    "Fashion is more than": ["Նորաձևությունը ավելին է, քան", "Мода — это больше, чем"],
    "just beauty": ["պարզապես գեղեցկություն", "просто красота"],
    "Rich & Fabulous is an independent, family-run brand built around responsible production and a distinctive approach to fashion. With the majority of our pieces produced in the USA, we have grown from those roots into an international presence across 45 countries.": ["Rich & Fabulous-ը անկախ, ընտանեկան ապրանքանիշ է, որը կառուցված է պատասխանատու արտադրության և նորաձևության յուրահատուկ մոտեցման շուրջ։ Մեր իրերի մեծ մասը արտադրվում է ԱՄՆ-ում, և այդ արմատներից աճել ենք մինչև ներկայություն 45 երկրում։", "Rich & Fabulous — независимый семейный бренд, построенный на ответственном производстве и особом взгляде на моду. Большая часть вещей производится в США, и из этих корней мы выросли до присутствия в 45 странах."],
    "Create your own style and discover comfort — every seam, every weight of cotton, every shade is chosen so the piece stays with you long after the season ends.": ["Ստեղծիր քո ոճը և բացահայտիր հարմարավետությունը՝ ամեն կար, բամբակի ամեն խտություն, ամեն երանգ ընտրված է այնպես, որ իրը մնա քեզ հետ սեզոնից շատ հետո։", "Создайте свой стиль и откройте комфорт: каждый шов, каждая плотность хлопка, каждый оттенок выбраны так, чтобы вещь осталась с вами задолго после конца сезона."],
    "Established": ["Հիմնադրվել է", "Основан"],
    "Countries served": ["Երկրներ", "Стран доставки"],
    "USA": ["ԱՄՆ", "США"],
    "Where most pieces are made": ["Որտեղ արտադրվում է մեծ մասը", "Где шьётся большинство"],

    /* ---- collection ---- */
    "Elegance in": ["Նազելիություն", "Элегантность в"],
    "every shade": ["ամեն երանգում", "каждом оттенке"],
    "Elegant clothing and warm moments, season after season. Drag to explore the collection.": ["Նազելի հագուստ և ջերմ պահեր՝ սեզոն առ սեզոն։ Քաշեք՝ հավաքածուն դիտելու համար։", "Элегантная одежда и тёплые моменты, сезон за сезоном. Потяните, чтобы посмотреть коллекцию."],
    "New": ["Նոր", "Новинка"],
    "All pieces →": ["Բոլոր իրերը →", "Все модели →"],
    "The collection": ["Հավաքածուն", "Коллекция"],

    /* ---- colours ---- */
    "Ivory / Navy": ["Փղոսկր / Մուգ կապույտ", "Айвори / Тёмно-синий"],
    "Powder / Midnight": ["Փոշեվարդ / Գիշերային", "Пудровый / Ночной"],
    "Cream / Scarlet": ["Կրեմ / Բոսոր", "Кремовый / Алый"],
    "Cream / Navy": ["Կրեմ / Մուգ կապույտ", "Кремовый / Тёмно-синий"],
    "Burgundy": ["Բորդո", "Бордовый"],
    "Rust / Pink check": ["Ժանգագույն / Վարդագույն վանդակ", "Терракота / Розовая клетка"],
    "Rust check": ["Ժանգագույն վանդակ", "Терракотовая клетка"],
    "Indigo": ["Ինդիգո", "Индиго"],
    "Ivory": ["Փղոսկր", "Айвори"],

    /* ---- film + categories ---- */
    "Elegant clothing, warm moments and": ["Նազելի հագուստ, ջերմ պահեր և", "Элегантная одежда, тёплые моменты и"],
    "year-round spirit": ["ամբողջ տարվա ոգի", "круглогодичное настроение"],
    "Shop by category": ["Ըստ կատեգորիայի", "По категориям"],
    "Create your own style": ["Ստեղծիր քո ոճը", "Создай свой стиль"],
    "and discover comfort": ["և բացահայտիր հարմարավետությունը", "и открой комфорт"],
    "Four ways into the wardrobe. Worldwide shipping on every category.": ["Չորս ճանապարհ դեպի պահարան։ Առաքում ամբողջ աշխարհով՝ ամեն կատեգորիայի համար։", "Четыре входа в гардероб. Доставка по всему миру для каждой категории."],
    "Tees & Knits": ["Շապիկներ և տրիկոտաժ", "Футболки и трикотаж"],
    "Shirts": ["Վերնաշապիկներ", "Рубашки"],
    "Outerwear": ["Վերնահագուստ", "Верхняя одежда"],
    "Caps": ["Գլխարկներ", "Кепки"],
    "All": ["Բոլորը", "Все"],

    /* ---- details / faq ---- */
    "Good to know": ["Օգտակար է իմանալ", "Полезно знать"],
    "The practical": ["Գործնական", "Практические"],
    "details": ["մանրամասներ", "детали"],
    "Everything you would ask us at the counter.": ["Այն ամենը, ինչ կհարցնեիք մեզ խանութում։", "Всё, о чём вы спросили бы нас у прилавка."],
    "Shipping and delivery": ["Առաքում և տեղափոխում", "Доставка"],
    "We ship worldwide to 45 countries. Orders leave the studio within two working days; delivery takes three to seven days depending on the destination.": ["Առաքում ենք ամբողջ աշխարհով՝ 45 երկիր։ Պատվերները ստուդիան լքում են երկու աշխատանքային օրվա ընթացքում, առաքումը տևում է երեքից յոթ օր՝ կախված ուղղությունից։", "Мы отправляем в 45 стран. Заказы покидают студию в течение двух рабочих дней, доставка занимает от трёх до семи дней в зависимости от направления."],
    "Sizing and fit": ["Չափսեր և նստվածք", "Размеры и посадка"],
    "Every piece is cut from one pattern block, so your size carries across shades and styles. Between sizes, size down for a clean fit and up for the oversized look.": ["Ամեն իր կարվում է մեկ կաղապարից, այսպիսով ձեր չափսը գործում է բոլոր երանգների և ոճերի համար։ Երկու չափսի միջև ընտրեք փոքրը՝ հարմար նստվածքի, մեծը՝ oversize տեսքի համար։", "Все вещи кроятся по одной базовой выкройке, поэтому ваш размер работает во всех оттенках и моделях. Между размерами берите меньший для чёткой посадки и больший для оверсайза."],
    "Fabric and care": ["Գործվածք և խնամք", "Ткань и уход"],
    "Combed cotton, 240 gsm on jersey and 320 gsm on outerwear. Wash cold, dry flat, and press on the reverse to keep the print and the colour.": ["Սանրված բամբակ՝ 240 գ/մ² ջերսիի և 320 գ/մ² վերնահագուստի համար։ Լվացեք սառը ջրով, չորացրեք հարթ վիճակում և արդուկեք հակառակ կողմից՝ տպագրությունն ու գույնը պահպանելու համար։", "Гребенной хлопок: 240 г/м² для джерси и 320 г/м² для верхней одежды. Стирайте в холодной воде, сушите в расправленном виде и утюжьте с изнанки, чтобы сохранить принт и цвет."],
    "Returns and exchanges": ["Վերադարձ և փոխանակում", "Возврат и обмен"],
    "Thirty days from delivery, unworn and with the tags on. Exchanges within the same shade ship free; refunds return to the original payment method.": ["Երեսուն օր առաքումից հետո՝ չկրված և պիտակներով։ Նույն երանգի փոխանակումն անվճար է, գումարը վերադարձվում է վճարման նույն եղանակով։", "Тридцать дней с момента доставки — неношеное и с бирками. Обмен внутри одного оттенка бесплатный, возврат средств — тем же способом оплаты."],

    /* ---- visit ---- */
    "Visit us": ["Այցելեք մեզ", "Приходите к нам"],
    "3/1 Abovyan Street": ["Աբովյան 3/1", "Абовян 3/1"],
    "Yerevan": ["Երևան", "Ереван"],
    "Phone": ["Հեռախոս", "Телефон"],
    "Hours": ["Ժամեր", "Часы работы"],
    "Monday to Sunday": ["Երկուշաբթի — Կիրակի", "Понедельник — воскресенье"],
    "Studio & showroom — 3/1 Abovyan St": ["Ստուդիա և ցուցասրահ — Աբովյան 3/1", "Студия и шоурум — Абовян 3/1"],

    /* ---- manifesto + footer ---- */
    "More than a T-shirt. It’s the": ["Ավելին, քան շապիկ։ Սա", "Больше, чем футболка. Это"],
    "way.": ["ոգին է։", "— наш стиль."],
    "You’re the one who sets the trends — we simply cut the cloth that keeps up with you.": ["Դու ես, ով թելադրում է միտումները. մենք պարզապես կարում ենք գործվածքը, որը հետ չի մնում քեզնից։", "Тренды задаёшь ты — мы просто кроим ткань, которая за тобой успевает."],
    "Have it. Wear it.": ["Ունեցիր։ Կրիր։", "Купи. Носи."],
    "Love it.": ["Սիրիր։", "Люби."],
    "Your email": ["Ձեր էլ. հասցեն", "Ваш e-mail"],
    "Subscribe": ["Բաժանորդագրվել", "Подписаться"],
    "Care": ["Խնամք", "Уход"],
    "Terms": ["Պայմաններ", "Условия"],

    /* ---- shop: list ---- */
    "Sort — Featured": ["Դասավորել — Ընտրված", "Сортировка — Избранное"],
    "Price — Low to high": ["Գին — Աճման կարգով", "Цена — по возрастанию"],
    "Price — High to low": ["Գին — Նվազման կարգով", "Цена — по убыванию"],

    /* ---- shop: product ---- */
    "← All pieces": ["← Բոլոր իրերը", "← Все модели"],
    "Size —": ["Չափս —", "Размер —"],
    "Size": ["Չափս", "Размер"],
    "Add to bag": ["Ավելացնել պայուսակ", "В корзину"],
    "Added to bag": ["Ավելացված է", "Добавлено"],
    "Worldwide shipping — 45 countries": ["Առաքում ամբողջ աշխարհով — 45 երկիր", "Доставка по всему миру — 45 стран"],
    "Made mainly in the USA": ["Հիմնականում արտադրված ԱՄՆ-ում", "В основном сделано в США"],
    "Free returns within 14 days": ["Անվճար վերադարձ 14 օրվա ընթացքում", "Бесплатный возврат в течение 14 дней"],
    "You may also like": ["Ձեզ նույնպես կհավանեք", "Вам также понравится"],
    "A fine-gauge ringer knit with contrast navy trims and a small embroidered monogram at the chest. Cut relaxed through the body.": ["Բարակ հյուսվածքով շապիկ՝ մուգ կապույտ հակադիր եզրագծերով և կրծքավանդակի փոքր ասեղնագործ մոնոգրամով։ Ազատ նստվածք։", "Тонкий трикотаж с контрастной тёмно-синей отделкой и небольшой вышитой монограммой на груди. Свободный крой."],
    "Heavyweight combed cotton in the house burgundy, with a woven label at the chest. Drops off the shoulder for an easy line.": ["Խիտ սանրված բամբակ՝ ֆիրմային բորդո գույնով և կրծքին հյուսված պիտակով։ Ուսից իջնող ազատ գիծ։", "Плотный гребенной хлопок в фирменном бордо с тканым лейблом на груди. Спущенное плечо и свободная линия."],
    "Lightweight technical shell with a chevron panel and printed wordmark. Water-repellent finish, packs into its own pocket.": ["Թեթև տեխնիկական բաճկոն՝ շևրոնային ներդիրով և տպագիր լոգոտիպով։ Ջրամերժ, ծալվում է սեփական գրպանում։", "Лёгкая техничная ветровка с шевронной вставкой и печатным логотипом. Водоотталкивающая, складывается в собственный карман."],
    "Piqué cotton polo with scarlet collar detail, tipped cuffs and the embroidered monogram.": ["Պիկե բամբակյա պոլո՝ բոսոր օձիքի դետալով, եզրագծված թեզանիքներով և ասեղնագործ մոնոգրամով։", "Поло из хлопкового пике с алой деталью воротника, отделкой манжет и вышитой монограммой."],
    "Brushed cotton check overshirt with a tonal embroidered monogram at the pocket. Wear it open over everything.": ["Խաշած բամբակից վանդակավոր վերնաշապիկ՝ գրպանին տոնային ասեղնագործ մոնոգրամով։ Կրեք բաց՝ ամեն ինչի վրայից։", "Рубашка-оверширт из брашированного хлопка в клетку с тональной вышитой монограммой на кармане. Носите расстёгнутой поверх всего."],
    "Six-panel cotton cap with a navy brim and raised monogram embroidery. Adjustable strap.": ["Վեցամաս բամբակյա գլխարկ՝ մուգ կապույտ եզրով և ուռուցիկ մոնոգրամ ասեղնագործությամբ։ Կարգավորվող ամրակ։", "Шестипанельная хлопковая кепка с тёмно-синим козырьком и объёмной вышивкой монограммы. Регулируемый ремешок."],
    "Rigid indigo denim cut to the knee, with a clean waistband and a soft A-line fall.": ["Կոշտ ինդիգո ջինս մինչև ծունկ՝ մաքուր գոտկատեղով և մեղմ A-գծով։", "Жёсткий индиго-деним до колена с чистым поясом и мягким А-силуэтом."],
    "Matching knit top and short in a breathable cotton blend — the piece the summer campaign was built around.": ["Համադրվող տրիկոտաժե թոփ և շորտ՝ շնչող բամբակե խառնուրդից. ամառային արշավի կենտրոնական իրը։", "Комплект из трикотажного топа и шорт из дышащей хлопковой смеси — вещь, вокруг которой построена летняя кампания."],

    /* ---- shop: cart + confirm ---- */
    "Your bag is empty.": ["Ձեր պայուսակը դատարկ է։", "Ваша корзина пуста."],
    "Continue shopping": ["Շարունակել գնումները", "Продолжить покупки"],
    "Remove": ["Հեռացնել", "Удалить"],
    "Subtotal": ["Ենթագումար", "Итого"],
    "Shipping calculated at checkout": ["Առաքումը հաշվարկվում է վճարման ժամանակ", "Доставка рассчитывается при оформлении"],
    "Checkout": ["Վճարել", "Оформить заказ"],
    "Scroll to explore — click to close": ["Ոլորեք՝ դիտելու համար — սեղմեք՝ փակելու", "Прокрутите, чтобы рассмотреть — нажмите, чтобы закрыть"],
    "Order placed": ["Պատվերն ընդունված է", "Заказ оформлен"],
    "Thank you for choosing us.": ["Շնորհակալ ենք, որ ընտրեցիք մեզ։", "Спасибо, что выбрали нас."],
    "Keep shopping": ["Շարունակել գնումները", "Продолжить покупки"]
  };

  /* "8 pieces" / "1 piece" */
  function counted(t, i) {
    var m = /^(\d+)\s+(piece|pieces)$/.exec(t);
    if (!m) return null;
    return i === 0 ? m[1] + ' իր' : m[1] + (m[2] === 'piece' ? ' модель' : ' моделей');
  }

  var lang = 'en';
  try { lang = localStorage.getItem('rf_lang') || 'en'; } catch (e) {}
  if (LANGS.indexOf(lang) === -1) lang = 'en';

  function lookup(t) {
    if (lang === 'en' || !t) return null;
    var i = lang === 'hy' ? 0 : 1;
    var e = D[t];
    if (e && e[i]) return e[i];
    return counted(t, i);
  }

  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
  function skipped(el) {
    for (var n = el; n && n !== document.body; n = n.parentElement) {
      if (SKIP[n.tagName]) return true;
      if (n.hasAttribute && n.hasAttribute('data-rf-lang-bar')) return true;
    }
    return false;
  }

  function pad(orig, translated) {
    var lead = /^\s*/.exec(orig)[0], tail = /\s*$/.exec(orig)[0];
    return lead + translated + tail;
  }

  function doText(n) {
    var raw = n.nodeValue;
    if (!raw || !/\S/.test(raw)) return;
    if (raw !== n.__rfOut) n.__rfEn = raw;
    var en = n.__rfEn || raw;
    var t = lookup(en.trim());
    var out = t ? pad(en, t) : en;
    if (n.nodeValue !== out) n.nodeValue = out;
    n.__rfOut = out;
  }

  var ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  function doAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var key = '__rfA_' + a, keyOut = '__rfO_' + a;
      var cur = el.getAttribute(a);
      if (cur !== el[keyOut]) el[key] = cur;
      var en = el[key] || cur;
      var t = lookup(en.trim());
      var out = t ? pad(en, t) : en;
      if (cur !== out) el.setAttribute(a, out);
      el[keyOut] = out;
    }
  }

  function apply() {
    if (!document.body) return;
    document.documentElement.lang = lang;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var n, nodes = [];
    while ((n = w.nextNode())) nodes.push(n);
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.parentElement && !skipped(node.parentElement)) doText(node);
    }
    var els = document.body.querySelectorAll('[placeholder],[aria-label],[alt],[title]');
    for (var j = 0; j < els.length; j++) if (!skipped(els[j])) doAttrs(els[j]);
    paintBar();
  }

  function paintBar() {
    var bs = document.querySelectorAll('[data-rf-lang]');
    for (var i = 0; i < bs.length; i++) {
      var on = bs[i].getAttribute('data-rf-lang') === lang;
      bs[i].style.opacity = on ? '1' : '0.72';
      bs[i].style.fontWeight = on ? '600' : '400';
      bs[i].style.textDecoration = on ? 'underline' : 'none';
      bs[i].style.textUnderlineOffset = '4px';
    }
  }

  window.rfSetLang = function (code) {
    if (LANGS.indexOf(code) === -1) return;
    lang = code;
    try { localStorage.setItem('rf_lang', code); } catch (e) {}
    apply();
  };

  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('[data-rf-lang]') : null;
    if (!t) return;
    e.preventDefault();
    window.rfSetLang(t.getAttribute('data-rf-lang'));
  });

  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { pending = false; apply(); });
  }

  function boot() {
    apply();
    try {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true, characterData: true });
    } catch (e) {}
    setInterval(schedule, 800);
  }

  if (document.body) boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
