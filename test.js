import RaySo, {
    CardTheme,
    CardPadding,
    CardProgrammingLanguage,
} from './index.js'

const raySo = new RaySo({
    title: 'Custom Title',
    theme: CardTheme.BREEZE,
    padding: CardPadding.xl,
    language: CardProgrammingLanguage.JAVASCRIPT,
    debug: true,
    localPreview: true,
})
raySo.cook(`console.log('Hello From JavaScript!');`)
    .then(response => {
        console.log(
            '> Received an image buffer. Buffer length: %s',
            response.length
        )
    })
    .catch(err => {
        console.error(err.errors);
    })