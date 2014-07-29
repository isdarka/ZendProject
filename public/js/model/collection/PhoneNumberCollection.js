/**
 * @autor isdarka
 * @created Dec 23, 2013, 3:26:42 PM
 * 
 */

function PhoneNumberCollection()
{
}

PhoneNumberCollection.prototype = new Collection();
PhoneNumberCollection.prototype.constructor = PhoneNumberCollection;

/**
 * @param {PhoneNumber} phoneNumber
 */
PhoneNumberCollection.prototype.append = function(phoneNumber)
{
	try{
		if (phoneNumber instanceof PhoneNumber) {
			this.storage[phoneNumber.getIndex()] = phoneNumber;
//			file.render($("#customers"));
		} else {
			throw "phoneNumber must be an instanceof PhoneNumber";
		}
	}catch(e){
		throw e;
	}
};