
const jsQuizEn=[
    {
        question:`What is a typeof +'7'  JavaScript?`,
        variants:['String','Number','object'],
        otvet:1
    },
    {
        question:'Recursion in  JavaScript is:',
        variants:['funtion','object','array'],
        otvet:0
    },
    {
        question:'Following is not the JavaScript Data type:',
        variants:['Number','undefined','int'],
        otvet:2
    },
]

const jsQuizRu=[
    {
        question:`определите тип данных '+'7';`,
        variants:['String','Number','Array'],
        otvet:1
    },
    {
        question:'Рекурсия в JavaScript?',
        variants:['функция','объект','массив'],
        otvet:0
    },
    {
        question:'Укажите из нижеперечисленных не являющимся типом данных в JavaScript',
        variants:['Number','undefined','int'],
        otvet:2
    },
]

const reactQuizEn=[
    {
        question:'which of them is framework:',
        variants:['react','node js','c++'],
        otvet:0
    },
    {
        question:'which of the following is language:',
        variants:['node js','JS','react'],
        otvet:1
    },
    {
        question:'author of react:',
        variants:['Facebook','Google','Twitter'],
        otvet:0
    },
]

const reactQuizRu=[
    {
        question:'Что из ниже перечисленных является фреймворком?',
        variants:['react','node js','c++'],
        otvet:0
    },
    {
        question:'Выберите язык:',
        variants:['node js','JS','react'],
        otvet:1
    },
    {
        question:'автором реакт является:',
        variants:['Facebook','Google','Twitter'],
        otvet:0
    },
]

const cssQuizEn=[
    {
        question:'Which HTML tag is used to define an internal style sheet?',
        variants:['script','css','style'],
        otvet:2
    },
    {
        question:'Which CSS property controls the text size?',
        variants:['font-size','text-style','font-style'],
        otvet:0
    },
    {
        question:'How do you make each word in a text start with a capital letter?',
        variants:['transform:capitalize','text-transform:capitalize','text-style:capitalize'],
        otvet:1
    },
]

const cssQuizRu=[
    {
        question:'Какой тег HTML используется для определения внутренней таблицы стилей?',
        variants:['script','css','style'],
        otvet:2
    },
    {
        question:'Какое свойство CSS контролирует размер текста?',
        variants:['font-size','text-style','font-style'],
        otvet:0
    },
    {
        question:'Как сделать так, чтобы каждое слово в тексте начиналось с заглавной буквы?',
        variants:['transform:capitalize','text-transform:capitalize','text-style:capitalize'],
        otvet:1
    },
]

const htmlQuizEn=[
    {
        question:`What does HTML stand for?`,
        variants:['Home Tool Markup Language','Hyper Text Markup Language','Hyperlinks and Text Markup Language'],
        otvet:1
    },
    {
        question:'Who is making the Web standards?',
        variants:['The World Wide Web Consortium','Microsoft','Google'],
        otvet:0
    },
    {
        question:'Choose the correct HTML element to define important text:',
        variants:['<important>','<b>','<strong>'],
        otvet:2
    },
]

const htmlQuizRu=[
    {
        question:`Что означает HTML?`,
        variants:['Home Tool Markup Language','Hyper Text Markup Language','Hyperlinks and Text Markup Language'],
        otvet:1
    },
    {
        question:'Кто создает веб-стандарты?',
        variants:['The World Wide Web Consortium','Microsoft','Google'],
        otvet:0
    },
    {
        question:'Выберите правильный HTML-элемент для определения важного текста:',
        variants:['<important>','<b>','<strong>'],
        otvet:2
    },
]

const bootstrapQuizEn=[
    {
        question:`Which class provides a responsive fixed width container?`,
        variants:['.container','.container-fixed','.container-fluid'],
        otvet:2
    },
    {
        question:'The Bootstrap grid system is based on how many columns?',
        variants:[9,3,12],
        otvet:2
    },
    {
        question:'Which class is used to create a big box for calling extra attention?',
        variants:['.jumbotron','.container','.bigbox'],
        otvet:0
    },
]

const bootstrapQuizRu=[
    {
        question:`Какой класс предоставляет контейнер полной ширины, охватывающий всю ширину области просмотра?`,
        variants:['.container','.container-fixed','.container-fluid'],
        otvet:2
    },
    {
        question:'Система сеток Bootstrap основана на количестве столбцов?',
        variants:[9,3,12],
        otvet:2
    },
    {
        question:'Какой класс используется для создания большого ящика для привлечения дополнительного внимания?',
        variants:['.jumbotron','.container','.bigbox'],
        otvet:0
    },
]

const sassQuizEn=[
    {
        question:`____ sets the style rule to different media types.`,
        variants:['@media','@import','@extend'],
        otvet:0
    },
    {
        question:'@debug directive detects the errors and displays the SassScript expression values to the standard error output stream.',
        variants:['true','false'],
        otvet:0
    },
    {
        question:'Which of the following directive is used to share rules and relationships between selectors?',
        variants:['none of them','@media','@extend'],
        otvet:2
    },
]

const sassQuizRu=[
    {
        question:`____ устанавливает правило стиля для разных медиатип.`,
        variants:['@media','@import','@extend'],
        otvet:0
    },
    {
        question:'Директива @debug обнаруживает ошибки и выводит значения выражения SassScript в стандартный поток вывода ошибок.',
        variants:['true','false'],
        otvet:0
    },
    {
        question:'Какая директива предназначена для использования правил и отношений между селекторами.',
        variants:['ни одна','@media','@extend'],
        otvet:2
    },
]

const reduxQuizEn=[
    {
        question:`Do you need to keep all component states in Redux store?  `,
        variants:['You need to keep your application state as small as possible.',`You don't have to push everything in there.`,'all true'],
        otvet:2
    },
    {
        question:'What is Flux?',
        variants:['all true','is an application design paradigm used as a replacement for the more traditional mvc pattern.','It is not a framework or a library.'],
        otvet:0
    },
    {
        question:'What is Redux DevTools?',
        variants:['live-editing time travel environment','all true','customizable UI'],
        otvet:1
    },
]

const reduxQuizRu=[
    {
        question:`Как изменяется состояние в Redux?`,
        variants:['Единственный способ изменить состояние — это создать действие, объект, описывающий произошедшее.',`Это гарантирует, что ни представления, ни сетевые обратные вызовы никогда не будут выполнять запись напрямую в состояние.`,'все варианты верны'],
        otvet:2
    },
    {
        question:'Что такое Flux?',
        variants:['все варианты верны','Flux — это парадигма разработки приложений','Это не фреймворк или библиотека'],
        otvet:0
    },
    {
        question:'Что такое «хранилище» в Redux?',
        variants:['Хранилище — это объект, который хранит состояние приложения','все варианты верны','предоставляет несколько вспомогательных методов для доступа к состоянию'],
        otvet:1
    },
]

const webpackQuizEn=[
    {
        question:`Webpack is an open-source JavaScript module bundler.`,
        variants:['false','true'],
        otvet:1
    },
    {
        question:'Webpack takes modules with dependencies and generates static assets representing those modules.',
        variants:['true','false'],
        otvet:0
    },
    {
        question:' It takes in various assets, such as JavaScript, CSS, Fonts, Images, and HTML, and then transforms these assets into a format that’s convenient to consume through a browser.',
        variants:['true','false'],
        otvet:0
    },
]

const webpackQuizRu=[
    {
        question:`Вебпак — это сборщик модулей.`,
        variants:['false','true'],
        otvet:1
    },
    {
        question:'Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».',
        variants:['true','false'],
        otvet:0
    },
    {
        question:'После инициализации проекта с помощью npm, для работы вебпака нужно установить два пакета — webpack и webpack-cli.',
        variants:['true','false'],
        otvet:0
    },
]


export const quizesData=
[
    {
        En:jsQuizEn,
        Ru:jsQuizRu
    },
    {
        En:reactQuizEn,
        Ru:reactQuizRu
    },
    {
        En:htmlQuizEn,
        Ru:htmlQuizRu
    },
    {
        En:cssQuizEn,
        Ru:cssQuizRu
    },
    {
        En:bootstrapQuizEn,
        Ru:bootstrapQuizRu
    },
    {
        En:sassQuizEn,
        Ru:sassQuizRu
    },
    {
        En:reduxQuizEn,
        Ru:reduxQuizRu
    },
    {
        En:webpackQuizEn,
        Ru:webpackQuizRu
    },
]

export const perevod={
    En:    
    {
        begin:'QUIZLAND',predisloviye:'GOOD LUCK!',nazvaniye:'MASTER YOUR SKILLS BY QUIZ.',vopros:'question',adverb:'from',try:'Try again',prev:'previous question',result:'Total score',question:'question',yourAnswer:'your answer',correctAnswer:'correct answer',score:'score',time:'Remaining Time: '
    },
    Ru:
    {        
        begin:'КВИЗЛАНДИЯ',predisloviye:'УДАЧИ!',nazvaniye:'ОТТАЧИВАЙ СВОИ НАВЫКИ С ТЕСТОМ.',vopros:'вопрос',adverb:'из',try:'Попробовать снова',prev:'предыдущий вопрос',result:'Общий Балл',question:'вопрос',yourAnswer:'ваш ответ',correctAnswer:'правильный ответ',score:'балл',time:'Оставшееся время: '
    },
}
export const navItems=['JAVASCRIPT','REACT','HTML','CSS','BOOTSTRAP','SASS','REDUX','WEBPACK',]



