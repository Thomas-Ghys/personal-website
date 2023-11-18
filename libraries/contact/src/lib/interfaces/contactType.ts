export type ContactType = {
	contactType: 'url' | 'img' | 'email' | 'phone' | 'ID',
	contactTypeName: string,
	contactIcon: string,
	contactLink: string,
	contactID?: string
}