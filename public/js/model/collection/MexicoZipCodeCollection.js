/**
 * @autor isdarka
 * @created Dec 23, 2013, 3:26:42 PM
 * 
 */

function MexicoZipCodeCollection()
{
}

MexicoZipCodeCollection.prototype = new Collection();
MexicoZipCodeCollection.prototype.constructor = MexicoZipCodeCollection;

/**
 * @param {MexicoZipCode} mexicoZipCode
 */
MexicoZipCodeCollection.prototype.append = function(mexicoZipCode)
{
	try{
		if (mexicoZipCode instanceof MexicoZipCode) {
			this.storage[mexicoZipCode.getIndex()] = mexicoZipCode;
//			file.render($("#customers"));
		} else {
			throw "mexicoZipCode must be an instanceof MexicoZipCode";
		}
	}catch(e){
		throw e;
	}
};

/**
 * 
 * @param zipCode
 * @returns {MexicoZipCodeCollection}
 */
MexicoZipCodeCollection.prototype.getByZipCode = function(zipCode)
{
	var collection = new MexicoZipCodeCollection();
	collection.clear();
	$.each(this.getStorage(), function(index, mexicoZipCode){
		if (mexicoZipCode instanceof MexicoZipCode) {
//			mexicoZipCode = new MexicoZipCode();
			if(mexicoZipCode.getDCodigo() == zipCode)
				collection.append(mexicoZipCode);
		}
	});
	return collection;
};

/**
 * 
 * @param zipCode
 * @returns {MexicoZipCodeCollection}
 */
MexicoZipCodeCollection.prototype.deleteByZipCode = function(zipCode)
{
	var self = this;
	$.each(this.getStorage(), function(index, mexicoZipCode){
		if (mexicoZipCode instanceof MexicoZipCode) {
			if(mexicoZipCode.getDCodigo() == zipCode)
				self.deleteByIndex(mexicoZipCode.getIndex());
		}
	});
	return this;
};