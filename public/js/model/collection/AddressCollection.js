/**
 * @autor isdarka
 * @created Dec 23, 2013, 3:26:42 PM
 * 
 */

function AddressCollection()
{
}

AddressCollection.prototype = new Collection();
AddressCollection.prototype.constructor = AddressCollection;

/**
 * @param {Address} address
 */
AddressCollection.prototype.append = function(address)
{
	try{
		if (address instanceof Address) {
			this.storage[address.getIndex()] = address;
//			file.render($("#customers"));
		} else {
			throw "address must be an instanceof Address";
		}
	}catch(e){
		throw e;
	}
};