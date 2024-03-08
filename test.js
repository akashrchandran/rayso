import RaySo, {
    CardTheme,
    CardPadding,
    CardProgrammingLanguage,
} from './index.js'

const raySo = new RaySo({
    title: 'Custom Title',
    theme: CardTheme.RAINDROP,
    padding: CardPadding.md,
    language: CardProgrammingLanguage.AUTO,
    debug: true,
    localPreview: true,
})

raySo.cook(`print('Hello, World!');`)