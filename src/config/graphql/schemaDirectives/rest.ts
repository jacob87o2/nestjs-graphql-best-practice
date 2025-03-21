import { SchemaDirectiveVisitor } from 'graphql-tools'

class RestDirective extends SchemaDirectiveVisitor {
	public visitFieldDefinition(field) {
		const { url } = this.args
		field.resolve = () => fetch(url)
	}
}

export default RestDirective
