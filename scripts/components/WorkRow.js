/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const WorkRowDesign = require('library/WorkRow');
const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image =require("sf-core/ui/image");

const WorkRow = extend(WorkRowDesign)(
  //constructor
  function(_super, props, pageName) {
    // initalizes super class for this scope
    _super(this, props || WorkRowDesign.defaults);
    this.pageName = pageName;
    
      Object.assign('assignHeaderImage', {
      set: function(headerbar) {
        setLeftItem(headerbar);
      }
    });

    function setLeftItem(headerbar) {
  
      headerbar.leftItemEnabled = true;
      var workOrdersItem = new HeaderBarItem({
        image: Image.createFromFile("images://locationicon.png"),
        color: Color.WHITE,
        onPress: function() {
        //
        }
      });
      var arr = [workOrdersItem];
      headerbar.setItems(arr);
    }
  }

);

module && (module.exports = WorkRow);