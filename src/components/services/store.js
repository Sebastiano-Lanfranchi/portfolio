import create from 'zustand';

export default create(set => ({
    isSelect: true,
    frontElem: false,
    composerElem:false,
    photographerElem: false,
    setIsSelect: isSelect=> set({isSelect}),
    setFrontElem: frontElem => set({frontElem}),
    setComposerElem: composerElem => set({composerElem}),
    setPhotographerElem: photographerElem => set({photographerElem}),
    onOfHomepage(page) {
        if (page) {
            this.setIsSelect(false)
            switch (page) {
                case 'frn':
                    this.setFrontElem(true);
                    break;
                case 'cmp':
                    this.setComposerElem(true)
                    break;
                case 'pht':
                    this.setPhotographerElem(true)
                    break;
            }
        } else {
            if (this.isSelect)
                return this.setIsSelect(false)
            else {
                this.setFrontElem(false);
                this.setComposerElem(false);
                this.setPhotographerElem(false);
                return this.setIsSelect(true)
            }
        }
    },
}));