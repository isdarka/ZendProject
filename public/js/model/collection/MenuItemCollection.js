/**
 * @autor isdarka
 * @created Dec 23, 2013, 3:26:42 PM
 * 
 */

function MenuItemCollection()
{
}

MenuItemCollection.prototype = new Collection();
MenuItemCollection.prototype.constructor = MenuItemCollection;

/**
 * @param {MenuItem} menuItem
 */
MenuItemCollection.prototype.append = function(menuItem)
{
	try{
		if (menuItem instanceof MenuItem) {
			this.storage[menuItem.getIndex()] = menuItem;
//			file.render($("#customers"));
		} else {
			throw "menuItem must be an instanceof MenuItem";
		}
	}catch(e){
		throw e;
	}
};