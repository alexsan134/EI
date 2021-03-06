interface ILangs {
	es: ILangPackage
}

interface ILangPackage {
	navbar: {
		opened: string
		closed: string
	}
	header: {
		info_1: string
		info_2: string
		linkTitle: string
		info_btn: string
		h1: string
		p: string
		btn: string
		ad: string
		adspan: string
		title: string
		text: string
	}
	about: {
		title: string
		text: string
		span: string
	}
	services: {
		title: string
		text: string
		list: {
			title: string
			text: string
		}[]
	}
	green: {
		title: string
		text: string
		btn: string
	}
	gallery: {
		title: string
		text: string
		btn: string
	}
	footer: {
		title: string
		text: string
		phone_1: string
		phone_2: string
		rights: string
		rights_1: string
		email: string
	}
}
