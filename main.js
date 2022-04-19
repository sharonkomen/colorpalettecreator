const app = Vue.createApp({
	data() {
		return {
			hex: null,
            showColorLabel: false,
            hex2: null,
            showColorLabelTwo: false,
            hexCombis: []
		}
	},
	methods: {
        generateColor() {
            this.hex = '#' + Math.floor(Math.random()*16777215).toString(16)
        },
        saveColorOne() {
            this.showColorLabel = true
        },
        generateColorTwo() {
            this.hex2 = '#' + Math.floor(Math.random()*16777215).toString(16)
        },
        saveSecondColor() {
            this.showColorLabelTwo = true
        },
        refresh() {
            location.reload()
        },
        pushHex() {
            this.hexCombis.push(this.hexCombi)
        }
	},
    computed: {
        hexCombi() {  
            return this.hex + ' + ' + this.hex2
        }
    }
})