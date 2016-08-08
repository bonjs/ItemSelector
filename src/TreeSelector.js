var TreeSelector = function(render) {
	var config = this.config = {
		view: {
			dblClickExpand: false,
			showLine: false
		},
		data: {
			simpleData: {
				enable: true
			}
		},
		callback: {
			beforeClick : function() {
				return false;
			}
		}
	};
	
	this.render = render;
	//this.tree = $.fn.zTree.init($(this.render), config, {});
	$('#add').click(function() {
		this.tree.getSelectedNodes().forEach(function(n, i) {
			this.tree.setChkDisabled(n, true);
			$('#right').append('<li style="cursor: pointer">' + n.name + '</li>');
		}.bind(this));
	}.bind(this));
	
	$('#right').bind('click', 'li', function(e) {
		alert('CLICK');
	});
};

TreeSelector.prototype = {
	load: function(nodes) {
		this.tree = $.fn.zTree.init($(this.render), this.config, nodes);
	},
	setValue: function() {
		
	}
};

var t = new TreeSelector($('#demo'));

var zNodes =[
	{ id:1, pId:0, name:"全国", open:true},
	{ id:11, pId:1, name:"北京", open:true},
	{ id:111, pId:11, name:"海淀"},
	{ id:112, pId:11, name:"朝阳"},
	{ id:12, pId:1, name:"河北", open:true},
	{ id:121, pId:12, name:"石家庄"},
	{ id:122, pId:12, name:"承德"}
];

t.load(zNodes);
