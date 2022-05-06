import create from 'zustand';

export default create(set => ({
    isSelect: true,
    frontElem: false,
    composerElem: false,
    photographerElem: false,
    contactElem: false,
    setIsSelect: isSelect => set({ isSelect }),
    setFrontElem: frontElem => set({ frontElem }),
    setComposerElem: composerElem => set({ composerElem }),
    setPhotographerElem: photographerElem => set({ photographerElem }),
    setContactElem: contactElem => set({ contactElem }),
    onOfHomepage(page) {
        if (page) {
            this.setIsSelect(false)
            switch (page) {
                case 'frn':
                    this.setFrontElem(true);
                    this.setComposerElem(false);
                    this.setPhotographerElem(false);
                    this.setContactElem(false);
                    break;
                case 'cmp':
                    this.setComposerElem(true)
                    this.setFrontElem(false);
                    this.setPhotographerElem(false);
                    this.setContactElem(false);
                    break;
                case 'pht':
                    this.setPhotographerElem(true);
                    this.setComposerElem(false);
                    this.setFrontElem(false);
                    this.setContactElem(false);
                    break;
                case 'hom':
                    this.setPhotographerElem(false);
                    this.setComposerElem(false);
                    this.setFrontElem(false);
                    this.setIsSelect(true);
                    this.setContactElem(false);
                    break;
                case 'cnt':
                    this.setPhotographerElem(false);
                    this.setComposerElem(false);
                    this.setFrontElem(false);
                    this.setIsSelect(false);
                    this.setContactElem(true);
                    break;
            }
        } else {
            if (this.isSelect)
                return this.setIsSelect(false)
            else {
                this.setFrontElem(false);
                this.setContactElem(false);
                this.setComposerElem(false);
                this.setPhotographerElem(false);
                return this.setIsSelect(true)
            }
        }
    },
}));