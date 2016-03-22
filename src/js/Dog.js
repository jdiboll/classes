class Dog {
	
	constructor (dogParams) {
		dogParams = dogParams || {};
		this.color = dogParams.color;
		this.hungry = dogParams.hungry;
		this.status = dogParams.status;
		this.owner = dogParams.owner;
}		
}
  export default Dog;