module.exports = {
	css: {
		loaderOptions: {
			// передача настроек в sass-loader
			sass: {
				// @/ это псевдоним к каталогу src/ поэтому предполагается,
				// что у вас в проекте есть файл `src/variables.scss`
				prependData: `@import "~@/assets/scss/variables.scss";`
			},
		}
	}
}
