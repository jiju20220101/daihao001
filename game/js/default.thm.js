window.ResultSkin=window.ResultSkin||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"ListData":"resource/eui_skins/ListData.exml","XButton":"resource/eui_skins/XButton.exml","RankList":"resource/eui_skins/RankList.exml","ranklistData":"resource/eui_skins/ranklistData.exml","testAnim":"resource/eui_skins/testAnim.exml","LoginType":"resource/eui_skins/LoginType.exml","GameSetting":"resource/eui_skins/GameSetting.exml","GameSignIn":"resource/eui_skins/GameSignIn.exml","GameStore":"resource/eui_skins/GameStore.exml","tips":"resource/eui_skins/tips.exml","TipsDemond":"resource/eui_skins/TipsDemond.exml","ExitBox":"resource/eui_skins/ExitBox.exml","ConnectLoadingPanel":"resource/eui_skins/ConnectLoadingPanel.exml","LoadingMainUI":"resource/eui_skins/LoadingMainUI.exml","DefindPanel":"resource/eui_skins/DefindPanel.exml","GameFight":"resource/eui_skins/GameFight.exml","TipsShare":"resource/eui_skins/TipsShare.exml","GameLotteryDraw":"resource/eui_skins/GameLotteryDraw.exml","lotteryData":"resource/eui_skins/lotteryData.exml","GameFight_Pop_Window":"resource/eui_skins/GameFight_Pop_Window.exml","GameTask":"resource/eui_skins/GameTask.exml","GameTasklist":"resource/eui_skins/GameTasklist.exml","FriendHelp":"resource/eui_skins/FriendHelp.exml"};generateEUI.paths['resource/eui_skins/ConnectLoadingPanelSkin.exml'] = window.ConnectLoadingPanelSkin = (function (_super) {
	__extends(ConnectLoadingPanelSkin, _super);
	function ConnectLoadingPanelSkin() {
		_super.call(this);
		this.skinParts = ["circle","dian"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = ConnectLoadingPanelSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 300;
		t.elementsContent = [this._Image1_i(),this.circle_i(),this._Image2_i(),this.dian_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 122;
		t.horizontalCenter = 0;
		t.source = "skin_head1_png";
		t.verticalCenter = 0;
		t.width = 122;
		return t;
	};
	_proto.circle_i = function () {
		var t = new eui.Image();
		this.circle = t;
		t.horizontalCenter = 0;
		t.source = "loadingImg_json.load_cicle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loadingImg_json.load_Loading...";
		t.verticalCenter = 125;
		return t;
	};
	_proto.dian_i = function () {
		var t = new eui.Image();
		this.dian = t;
		t.horizontalCenter = 70;
		t.source = "loadingImg_json.load_dian1";
		t.verticalCenter = 130;
		return t;
	};
	return ConnectLoadingPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DefindPanelSkin.exml'] = window.DefindPanelSkin = (function (_super) {
	__extends(DefindPanelSkin, _super);
	var DefindPanelSkin$Skin1 = 	(function (_super) {
		__extends(DefindPanelSkin$Skin1, _super);
		function DefindPanelSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DefindPanelSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Frame_json.frame_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.verticalCenter = -3;
			return t;
		};
		return DefindPanelSkin$Skin1;
	})(eui.Skin);

	var DefindPanelSkin$Skin2 = 	(function (_super) {
		__extends(DefindPanelSkin$Skin2, _super);
		function DefindPanelSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = DefindPanelSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "Frame_json.frame_sure";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.verticalCenter = -3;
			return t;
		};
		return DefindPanelSkin$Skin2;
	})(eui.Skin);

	function DefindPanelSkin() {
		_super.call(this);
		this.skinParts = ["title_label","content_label","close_btn","sure_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = DefindPanelSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 380;
		t.horizontalCenter = 0;
		t.top = 200;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this.title_label_i(),this.content_label_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 317.932;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages4_json.all (74)";
		t.width = 510;
		t.y = 0;
		return t;
	};
	_proto.title_label_i = function () {
		var t = new eui.Label();
		this.title_label = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "确认";
		t.textColor = 0xc26b19;
		t.y = 45;
		return t;
	};
	_proto.content_label_i = function () {
		var t = new eui.Label();
		this.content_label = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "是否使用XXX钻石购买改皮肤？";
		t.textColor = 0xC26B19;
		t.x = 185;
		t.y = 111;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98.48;
		t.horizontalCenter = 4;
		t.width = 448.48;
		t.y = 172.37;
		t.elementsContent = [this.close_btn_i(),this.sure_btn_i()];
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new XButton();
		this.close_btn = t;
		t.label = "取消";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 33;
		t.skinName = DefindPanelSkin$Skin1;
		return t;
	};
	_proto.sure_btn_i = function () {
		var t = new XButton();
		this.sure_btn = t;
		t.label = "確認";
		t.verticalCenter = 0;
		t.x = 236;
		t.skinName = DefindPanelSkin$Skin2;
		return t;
	};
	return DefindPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ExitPanelSkin.exml'] = window.ExitPaneltSkin = (function (_super) {
	__extends(ExitPaneltSkin, _super);
	var ExitPaneltSkin$Skin3 = 	(function (_super) {
		__extends(ExitPaneltSkin$Skin3, _super);
		function ExitPaneltSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ExitPaneltSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ExitImg_json.exit_in";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -4;
			return t;
		};
		return ExitPaneltSkin$Skin3;
	})(eui.Skin);

	var ExitPaneltSkin$Skin4 = 	(function (_super) {
		__extends(ExitPaneltSkin$Skin4, _super);
		function ExitPaneltSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ExitPaneltSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ExitImg_json.exit_back";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.size = 35;
			t.verticalCenter = -4;
			return t;
		};
		return ExitPaneltSkin$Skin4;
	})(eui.Skin);

	var ExitPaneltSkin$Skin5 = 	(function (_super) {
		__extends(ExitPaneltSkin$Skin5, _super);
		function ExitPaneltSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ExitPaneltSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "ExitImg_json.exit_cuo";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ExitPaneltSkin$Skin5;
	})(eui.Skin);

	function ExitPaneltSkin() {
		_super.call(this);
		this.skinParts = ["exit_btn","back_btn","cuo_btn","text_label"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = ExitPaneltSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this.cuo_btn_i(),this.text_label_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 646.022;
		t.horizontalCenter = 0;
		t.source = "allimages4_json.all (74)";
		t.top = 150;
		t.width = 514;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "ExitImg_json.exit_bird";
		t.top = 260;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 500;
		t.y = 599;
		t.elementsContent = [this.exit_btn_i(),this.back_btn_i()];
		return t;
	};
	_proto.exit_btn_i = function () {
		var t = new XButton();
		this.exit_btn = t;
		t.horizontalCenter = 100;
		t.label = "退出";
		t.y = 0;
		t.skinName = ExitPaneltSkin$Skin3;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new XButton();
		this.back_btn = t;
		t.label = "返回";
		t.x = 58;
		t.y = 0;
		t.skinName = ExitPaneltSkin$Skin4;
		return t;
	};
	_proto.cuo_btn_i = function () {
		var t = new XButton();
		this.cuo_btn = t;
		t.horizontalCenter = 223;
		t.label = "";
		t.top = 136;
		t.skinName = ExitPaneltSkin$Skin5;
		return t;
	};
	_proto.text_label_i = function () {
		var t = new eui.Label();
		this.text_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.blendMode = "normal";
		t.bold = true;
		t.border = false;
		t.borderColor = 0xf70c0c;
		t.fontFamily = "SimHei";
		t.height = 40;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf1742f;
		t.text = "退 出 遊 戲 嗎 ?";
		t.textAlign = "center";
		t.textColor = 0xf1742f;
		t.verticalAlign = "middle";
		t.width = 442;
		t.y = 209;
		return t;
	};
	return ExitPaneltSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FriendHelp.exml'] = window.FriendHelpSkin = (function (_super) {
	__extends(FriendHelpSkin, _super);
	var FriendHelpSkin$Skin6 = 	(function (_super) {
		__extends(FriendHelpSkin$Skin6, _super);
		function FriendHelpSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FriendHelpSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages2_json.all (23)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FriendHelpSkin$Skin6;
	})(eui.Skin);

	var FriendHelpSkin$Skin7 = 	(function (_super) {
		__extends(FriendHelpSkin$Skin7, _super);
		function FriendHelpSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = FriendHelpSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rank_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return FriendHelpSkin$Skin7;
	})(eui.Skin);

	function FriendHelpSkin() {
		_super.call(this);
		this.skinParts = ["img1","number_label1","get_img1","img2","number_label2","get_img2","img3","number_label3","get_img3","img4","number_label4","get_img4","img5","number_label5","get_img5","img6","number_label6","get_img6","skin_img","get_img7","invitation_btn","light_img","friend_title","back_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group12_i()];
	}
	var _proto = FriendHelpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group11_i(),this._Image14_i(),this.friend_title_i(),this.back_btn_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 1020;
		t.top = 125;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Image5_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Label10_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 69;
		t.height = 925;
		t.left = 26;
		t.right = 25;
		t.scale9Grid = new egret.Rectangle(94,101,11,11);
		t.source = "allimages5_json.all (46)";
		t.top = -23;
		t.width = 660;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 20;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "share_title_png";
		t.x = 133;
		t.y = 14;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -188;
		t.source = "share_img_png";
		t.y = 18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 55;
		t.text = "邀请7位好友领限量皮肤";
		t.textAlign = "center";
		t.textColor = 0xef5400;
		t.verticalAlign = "middle";
		t.width = 372;
		t.x = 196;
		t.y = 14;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 731;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(110,77,13,16);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "SettingImg_json.setting_bg1";
		t.width = 600;
		t.y = 100;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 390;
		t.horizontalCenter = 0;
		t.width = 570;
		t.y = 123;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "left";
		t.columnWidth = 3;
		t.horizontalAlign = "left";
		t.horizontalGap = 191;
		t.orientation = "rows";
		t.requestedColumnCount = 3;
		t.requestedRowCount = 2;
		t.rowAlign = "top";
		t.rowHeight = 2;
		t.verticalAlign = "top";
		t.verticalGap = 185;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 183;
		t.width = 180;
		t.x = 42;
		t.y = 37;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image6_i(),this._Label2_i(),this.img1_i(),this.number_label1_i(),this.get_img1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "bg_box_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.size = 27;
		t.text = "1";
		t.textColor = 0x9e6318;
		t.x = 14;
		t.y = 16;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.height = 96;
		t.horizontalCenter = -1;
		t.source = "allimages1_json.all (33)";
		t.width = 104;
		t.y = 28;
		return t;
	};
	_proto.number_label1_i = function () {
		var t = new eui.Label();
		this.number_label1 = t;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.text = "50";
		t.textColor = 0xf05103;
		t.y = 128;
		return t;
	};
	_proto.get_img1_i = function () {
		var t = new eui.Image();
		this.get_img1 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = -10;
		t.visible = true;
		t.width = 69;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 183;
		t.width = 180;
		t.x = 52;
		t.y = 47;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this.img2_i(),this.number_label2_i(),this.get_img2_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bg_box_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.size = 27;
		t.text = "2";
		t.textColor = 0x9E6318;
		t.x = 14;
		t.y = 16;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (34)";
		t.width = 104;
		t.y = 28;
		return t;
	};
	_proto.number_label2_i = function () {
		var t = new eui.Label();
		this.number_label2 = t;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.text = "50";
		t.textColor = 0xF05103;
		t.y = 128;
		return t;
	};
	_proto.get_img2_i = function () {
		var t = new eui.Image();
		this.get_img2 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = -10;
		t.width = 69;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 183;
		t.width = 180;
		t.x = 62;
		t.y = 57;
		t.layout = this._BasicLayout3_i();
		t.elementsContent = [this._Image8_i(),this._Label4_i(),this.img3_i(),this.number_label3_i(),this.get_img3_i()];
		return t;
	};
	_proto._BasicLayout3_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "bg_box_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.size = 27;
		t.text = "3";
		t.textColor = 0x9E6318;
		t.x = 14;
		t.y = 16;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (35)";
		t.width = 104;
		t.y = 28;
		return t;
	};
	_proto.number_label3_i = function () {
		var t = new eui.Label();
		this.number_label3 = t;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.text = "50";
		t.textColor = 0xF05103;
		t.y = 128;
		return t;
	};
	_proto.get_img3_i = function () {
		var t = new eui.Image();
		this.get_img3 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = -10;
		t.width = 69;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 183;
		t.width = 180;
		t.x = 72;
		t.y = 67;
		t.layout = this._BasicLayout4_i();
		t.elementsContent = [this._Image9_i(),this._Label5_i(),this.img4_i(),this.number_label4_i(),this.get_img4_i()];
		return t;
	};
	_proto._BasicLayout4_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bg_box_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.size = 27;
		t.text = "4";
		t.textColor = 0x9E6318;
		t.x = 14;
		t.y = 16;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (36)";
		t.width = 104;
		t.y = 28;
		return t;
	};
	_proto.number_label4_i = function () {
		var t = new eui.Label();
		this.number_label4 = t;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.text = "50";
		t.textColor = 0xF05103;
		t.y = 128;
		return t;
	};
	_proto.get_img4_i = function () {
		var t = new eui.Image();
		this.get_img4 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = -10;
		t.width = 69;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 183;
		t.width = 180;
		t.x = 82;
		t.y = 77;
		t.layout = this._BasicLayout5_i();
		t.elementsContent = [this._Image10_i(),this._Label6_i(),this.img5_i(),this.number_label5_i(),this.get_img5_i()];
		return t;
	};
	_proto._BasicLayout5_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bg_box_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.size = 27;
		t.text = "5";
		t.textColor = 0x9E6318;
		t.x = 14;
		t.y = 16;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (37)";
		t.width = 104;
		t.y = 28;
		return t;
	};
	_proto.number_label5_i = function () {
		var t = new eui.Label();
		this.number_label5 = t;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.text = "50";
		t.textColor = 0xF05103;
		t.y = 128;
		return t;
	};
	_proto.get_img5_i = function () {
		var t = new eui.Image();
		this.get_img5 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = -10;
		t.width = 69;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 183;
		t.width = 180;
		t.x = 92;
		t.y = 87;
		t.layout = this._BasicLayout6_i();
		t.elementsContent = [this._Image11_i(),this._Label7_i(),this.img6_i(),this.number_label6_i(),this.get_img6_i()];
		return t;
	};
	_proto._BasicLayout6_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "bg_box_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.size = 27;
		t.text = "6";
		t.textColor = 0x9E6318;
		t.x = 14;
		t.y = 16;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.height = 96;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (35)";
		t.width = 104;
		t.y = 28;
		return t;
	};
	_proto.number_label6_i = function () {
		var t = new eui.Label();
		this.number_label6 = t;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.text = "50";
		t.textColor = 0xF05103;
		t.y = 128;
		return t;
	};
	_proto.get_img6_i = function () {
		var t = new eui.Image();
		this.get_img6 = t;
		t.height = 64;
		t.horizontalCenter = 0;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = -10;
		t.width = 69;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 195;
		t.horizontalCenter = 0;
		t.width = 570;
		t.y = 505;
		t.elementsContent = [this._Image12_i(),this._Label8_i(),this._Image13_i(),this._Label9_i(),this.skin_img_i(),this.get_img7_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(73,72,13,8);
		t.source = "bg_box_png";
		t.verticalCenter = 0;
		t.width = 554;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.text = "7";
		t.textColor = 0x9e6318;
		t.x = 27;
		t.y = 26;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 153;
		t.source = "share_box_png";
		t.verticalCenter = -5;
		t.visible = true;
		t.width = 156;
		t.x = 53;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 153;
		t.lineSpacing = 10;
		t.text = "开局+10\n结算分数+10%\n限量皮肤！";
		t.textAlign = "left";
		t.textColor = 0xf05103;
		t.verticalAlign = "middle";
		t.verticalCenter = -5;
		t.width = 221;
		t.x = 325;
		return t;
	};
	_proto.skin_img_i = function () {
		var t = new eui.Image();
		this.skin_img = t;
		t.source = "skinlist19_png";
		t.verticalCenter = -5;
		t.x = 100;
		return t;
	};
	_proto.get_img7_i = function () {
		var t = new eui.Image();
		this.get_img7 = t;
		t.source = "allimages1_json.all (32)";
		t.verticalCenter = 0;
		t.x = 214;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135;
		t.width = 322;
		t.x = 211;
		t.y = 700;
		t.elementsContent = [this.invitation_btn_i(),this.light_img_i()];
		return t;
	};
	_proto.invitation_btn_i = function () {
		var t = new XButton();
		this.invitation_btn = t;
		t.height = 119;
		t.horizontalCenter = 0;
		t.label = "     邀请好友";
		t.verticalCenter = 0;
		t.width = 296;
		t.skinName = FriendHelpSkin$Skin6;
		return t;
	};
	_proto.light_img_i = function () {
		var t = new eui.Image();
		this.light_img = t;
		t.height = 120;
		t.source = "share_light_png";
		t.touchEnabled = false;
		t.x = 15;
		t.y = 7;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.left = 40;
		t.right = 40;
		t.size = 18;
		t.text = "每天邀请7位新老好玩家助力，可获得限量皮肤";
		t.textAlign = "center";
		t.textColor = 0xb75524;
		t.y = 838;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.horizontalCenter = 0;
		t.source = "allimages3_json.all (75)";
		t.top = 60;
		t.width = 262;
		return t;
	};
	_proto.friend_title_i = function () {
		var t = new eui.Label();
		this.friend_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.horizontalCenter = 0;
		t.text = "好友助力";
		t.textAlign = "center";
		t.top = 80;
		t.verticalAlign = "middle";
		t.width = 140;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new XButton();
		this.back_btn = t;
		t.label = "";
		t.left = 30;
		t.top = 30;
		t.skinName = FriendHelpSkin$Skin7;
		return t;
	};
	return FriendHelpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameFight_Pop_Window.exml'] = window.GameFight_Pop_WindowSkin = (function (_super) {
	__extends(GameFight_Pop_WindowSkin, _super);
	var GameFight_Pop_WindowSkin$Skin8 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin8, _super);
		function GameFight_Pop_WindowSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.4;
			t.scaleY = 0.4;
			t.source = "new_startbtn";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin8;
	})(eui.Skin);

	var GameFight_Pop_WindowSkin$Skin9 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin9, _super);
		function GameFight_Pop_WindowSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.4;
			t.scaleY = 0.4;
			t.source = "new_startbtn";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin9;
	})(eui.Skin);

	var GameFight_Pop_WindowSkin$Skin10 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin10, _super);
		function GameFight_Pop_WindowSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "shuying03";
			t.visible = true;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.horizontalCenter = 67;
			t.size = 70;
			t.stroke = 5;
			t.strokeColor = 0x04741E;
			t.text = "X2 GRADES";
			t.verticalCenter = -10;
			t.x = 58;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin10;
	})(eui.Skin);

	var GameFight_Pop_WindowSkin$Skin11 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin11, _super);
		function GameFight_Pop_WindowSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rank_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin11;
	})(eui.Skin);

	var GameFight_Pop_WindowSkin$Skin12 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin12, _super);
		function GameFight_Pop_WindowSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "result_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0.5;
			t.size = 35;
			t.text = "重新开始";
			t.verticalCenter = -4;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin12;
	})(eui.Skin);

	var GameFight_Pop_WindowSkin$Skin13 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin13, _super);
		function GameFight_Pop_WindowSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_share_record_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 26.5;
			t.size = 35;
			t.text = "分享录屏";
			t.verticalCenter = -4;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin13;
	})(eui.Skin);

	var GameFight_Pop_WindowSkin$Skin14 = 	(function (_super) {
		__extends(GameFight_Pop_WindowSkin$Skin14, _super);
		function GameFight_Pop_WindowSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFight_Pop_WindowSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "result_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0.5;
			t.size = 35;
			t.text = "重新开始";
			t.verticalCenter = -4;
			return t;
		};
		return GameFight_Pop_WindowSkin$Skin14;
	})(eui.Skin);

	function GameFight_Pop_WindowSkin() {
		_super.call(this);
		this.skinParts = ["img_revive_title","img_circle","img_revive_number","relive_btn","lab_diamondCount","btn_diamond_revive","btn_ads_revive","lab_ads_revive","group_ads_revive","group_revive","img_win_title","img_icon_player","img_icon_enemy","lab_nick_player","lab_score_player","lab_score_enemy","lab_nick_enemy","group_win","img_lose_title","img_lose_icon_player","lab_lose_nick_player","lab_lose_score_player","group_lose","btn_dobble_score","btn_tt_returnMain_top","btn_tt_restart","group_btn_tt_restart","btn_tt_shareRecord","group_btn_tt_shareRecord","btn_tt_returnMain_bottom","group_btn_tt_returnMain_bottom","lab_rewardDiamondNum","group_shareReward","group_bottom_btn_tt","lab_returnMain","btn_returnMain","lab_restart","btn_restart","group_bottom_btn_normal","group_win_lose_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group16_i()];
	}
	var _proto = GameFight_Pop_WindowSkin.prototype;

	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.group_revive_i(),this.group_win_i(),this.group_lose_i(),this.group_win_lose_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_revive_i = function () {
		var t = new eui.Group();
		this.group_revive = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 223;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.img_revive_title_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 6;
		t.horizontalAlign = "center";
		t.paddingLeft = 37;
		return t;
	};
	_proto.img_revive_title_i = function () {
		var t = new eui.Image();
		this.img_revive_title = t;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "all (59)";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 309;
		t.elementsContent = [this._Image2_i(),this.img_circle_i(),this.img_revive_number_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "all (57)";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_circle_i = function () {
		var t = new eui.Image();
		this.img_circle = t;
		t.anchorOffsetX = 99;
		t.anchorOffsetY = 99;
		t.height = 198;
		t.horizontalCenter = 0;
		t.rotation = 316.96;
		t.source = "pve_revive_circle_png";
		t.visible = false;
		t.width = 198;
		t.y = 135;
		return t;
	};
	_proto.img_revive_number_i = function () {
		var t = new eui.Image();
		this.img_revive_number = t;
		t.horizontalCenter = 0;
		t.source = "pve_revive_05_png";
		t.verticalCenter = -28;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.width = 642;
		t.x = 38;
		t.y = 791;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.btn_diamond_revive_i(),this.group_ads_revive_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.btn_diamond_revive_i = function () {
		var t = new eui.Group();
		this.btn_diamond_revive = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this.relive_btn_i(),this._Image3_i(),this.lab_diamondCount_i()];
		return t;
	};
	_proto.relive_btn_i = function () {
		var t = new XButton();
		this.relive_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFight_Pop_WindowSkin$Skin8;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "diamond_1_png";
		t.verticalCenter = 0;
		t.x = 23;
		return t;
	};
	_proto.lab_diamondCount_i = function () {
		var t = new eui.BitmapLabel();
		this.lab_diamondCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "loginNumbers_fnt";
		t.letterSpacing = 3;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.text = "1000";
		t.textAlign = "center";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 324;
		t.x = 88;
		return t;
	};
	_proto.group_ads_revive_i = function () {
		var t = new eui.Group();
		this.group_ads_revive = t;
		t.visible = false;
		t.x = 303;
		t.y = 0;
		t.elementsContent = [this.btn_ads_revive_i(),this._Image4_i(),this.lab_ads_revive_i()];
		return t;
	};
	_proto.btn_ads_revive_i = function () {
		var t = new XButton();
		this.btn_ads_revive = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFight_Pop_WindowSkin$Skin9;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "startbtn-2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lab_ads_revive_i = function () {
		var t = new eui.Label();
		this.lab_ads_revive = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.size = 15;
		t.text = "(游戏结束时自动播放)";
		t.textAlign = "center";
		t.visible = true;
		t.width = 248.67;
		t.x = -1;
		t.y = 78;
		return t;
	};
	_proto.group_win_i = function () {
		var t = new eui.Group();
		this.group_win = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.verticalCenter = 21;
		t.visible = false;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Group4_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Group5_i(),this._Group6_i(),this.lab_nick_player_i(),this.lab_score_player_i(),this.lab_score_enemy_i(),this.lab_nick_enemy_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "allimages3_json.shuying12";
		t.visible = true;
		t.x = 30;
		t.y = -348;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (83)";
		t.visible = true;
		t.y = 46.67;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (75)";
		t.visible = true;
		t.x = 10;
		t.y = 56.67;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (95)";
		t.visible = true;
		t.x = 20;
		t.y = -207.33;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 74.46;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.img_win_title_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_win_title_i = function () {
		var t = new eui.Image();
		this.img_win_title = t;
		t.source = "new_pve_title_win_cn_png";
		t.x = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(92,49,92,3);
		t.source = "all (97)";
		t.x = 115.49;
		t.y = 574;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (99)";
		t.y = 362.67;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(92,46,92,4);
		t.source = "all (97)";
		t.x = 595.49;
		t.y = 574;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.y = 309.27;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.img_icon_player_i(),this.img_icon_enemy_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 250;
		t.paddingLeft = 40;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_icon_player_i = function () {
		var t = new eui.Image();
		this.img_icon_player = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "skin_head1_png";
		return t;
	};
	_proto.img_icon_enemy_i = function () {
		var t = new eui.Image();
		this.img_icon_enemy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "skin_head2_png";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.x = 194;
		t.y = 310;
		t.elementsContent = [this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pve_circle_player_png";
		t.x = 141.37;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pve_circle_enemy_png";
		t.x = 712.22;
		return t;
	};
	_proto.lab_nick_player_i = function () {
		var t = new eui.Label();
		this.lab_nick_player = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35.5;
		t.size = 43;
		t.text = "1325124";
		t.textAlign = "center";
		t.textColor = 0xb05300;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 136.9;
		t.x = 198;
		t.y = 445;
		return t;
	};
	_proto.lab_score_player_i = function () {
		var t = new eui.Label();
		this.lab_score_player = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 3;
		t.text = "1325124";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.x = 145.3;
		t.y = 594;
		return t;
	};
	_proto.lab_score_enemy_i = function () {
		var t = new eui.Label();
		this.lab_score_enemy = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 60;
		t.stroke = 3;
		t.text = "54695";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.x = 662.5;
		t.y = 596;
		return t;
	};
	_proto.lab_nick_enemy_i = function () {
		var t = new eui.Label();
		this.lab_nick_enemy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35.5;
		t.size = 43;
		t.text = "1325";
		t.textAlign = "center";
		t.textColor = 0xB05300;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 136.9;
		t.x = 386;
		t.y = 445;
		return t;
	};
	_proto.group_lose_i = function () {
		var t = new eui.Group();
		this.group_lose = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.verticalCenter = -83;
		t.visible = false;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Group7_i(),this._Image16_i(),this._Group8_i(),this._Group9_i(),this.lab_lose_nick_player_i(),this.lab_lose_score_player_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "all (83)";
		t.visible = true;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (75)";
		t.visible = true;
		t.y = 10;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 27.46;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.img_lose_title_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_lose_title_i = function () {
		var t = new eui.Image();
		this.img_lose_title = t;
		t.source = "new_pve_lose_title_cn_png";
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(92,46,92,3);
		t.source = "all (97)";
		t.y = 687;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.y = 317.27;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this.img_lose_icon_player_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.img_lose_icon_player_i = function () {
		var t = new eui.Image();
		this.img_lose_icon_player = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "skin_head1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.x = 594.67;
		t.y = 328.27;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pve_circle_player_png";
		return t;
	};
	_proto.lab_lose_nick_player_i = function () {
		var t = new eui.Label();
		this.lab_lose_nick_player = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 35.5;
		t.size = 43;
		t.text = "1325124";
		t.textAlign = "center";
		t.textColor = 0xB05300;
		t.visible = false;
		t.width = 335.56;
		t.x = 194.67;
		t.y = 445;
		return t;
	};
	_proto.lab_lose_score_player_i = function () {
		var t = new eui.Label();
		this.lab_lose_score_player = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.stroke = 3;
		t.text = "1325124";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.visible = true;
		t.y = 707;
		return t;
	};
	_proto.group_win_lose_btn_i = function () {
		var t = new eui.Group();
		this.group_win_lose_btn = t;
		t.bottom = -224;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.visible = false;
		t.elementsContent = [this.btn_dobble_score_i(),this.group_bottom_btn_tt_i(),this.group_bottom_btn_normal_i()];
		return t;
	};
	_proto.btn_dobble_score_i = function () {
		var t = new XButton();
		this.btn_dobble_score = t;
		t.horizontalCenter = 0.5;
		t.label = "X2 GRADES";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 38;
		t.skinName = GameFight_Pop_WindowSkin$Skin10;
		return t;
	};
	_proto.group_bottom_btn_tt_i = function () {
		var t = new eui.Group();
		this.group_bottom_btn_tt = t;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn_tt_returnMain_top_i(),this._Group11_i(),this.group_shareReward_i()];
		return t;
	};
	_proto.btn_tt_returnMain_top_i = function () {
		var t = new XButton();
		this.btn_tt_returnMain_top = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 33.36;
		t.y = 21.21;
		t.skinName = GameFight_Pop_WindowSkin$Skin11;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 870.08;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group10_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 128;
		t.y = 0;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.group_btn_tt_restart_i(),this.group_btn_tt_shareRecord_i(),this.group_btn_tt_returnMain_bottom_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 37;
		return t;
	};
	_proto.group_btn_tt_restart_i = function () {
		var t = new eui.Group();
		this.group_btn_tt_restart = t;
		t.height = 81;
		t.width = 257;
		t.x = 28;
		t.y = 19;
		t.elementsContent = [this.btn_tt_restart_i()];
		return t;
	};
	_proto.btn_tt_restart_i = function () {
		var t = new XButton();
		this.btn_tt_restart = t;
		t.label = "重新开始";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFight_Pop_WindowSkin$Skin12;
		return t;
	};
	_proto.group_btn_tt_shareRecord_i = function () {
		var t = new eui.Group();
		this.group_btn_tt_shareRecord = t;
		t.height = 81;
		t.width = 257;
		t.x = 38;
		t.y = 29;
		t.elementsContent = [this.btn_tt_shareRecord_i()];
		return t;
	};
	_proto.btn_tt_shareRecord_i = function () {
		var t = new XButton();
		this.btn_tt_shareRecord = t;
		t.label = "分享录屏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFight_Pop_WindowSkin$Skin13;
		return t;
	};
	_proto.group_btn_tt_returnMain_bottom_i = function () {
		var t = new eui.Group();
		this.group_btn_tt_returnMain_bottom = t;
		t.height = 81;
		t.includeInLayout = false;
		t.visible = false;
		t.width = 257;
		t.x = 294;
		t.y = 0;
		t.elementsContent = [this.btn_tt_returnMain_bottom_i()];
		return t;
	};
	_proto.btn_tt_returnMain_bottom_i = function () {
		var t = new XButton();
		this.btn_tt_returnMain_bottom = t;
		t.includeInLayout = false;
		t.label = "返回首页";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = GameFight_Pop_WindowSkin$Skin14;
		return t;
	};
	_proto.group_shareReward_i = function () {
		var t = new eui.Group();
		this.group_shareReward = t;
		t.height = 59;
		t.right = -7;
		t.visible = false;
		t.width = 182;
		t.y = 829.34;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Group14_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tips_tt_pop_diamond_bg_png";
		t.x = -2.68;
		t.y = 2.66;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "title_tip_png";
		t.x = 96;
		t.y = 10.68;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 86;
		t.x = 5;
		t.y = 12.57;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this._Group13_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingRight = -11;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this._Group12_i(),this.lab_rewardDiamondNum_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_tt_plus_png";
		t.x = 0;
		t.y = 3.5;
		return t;
	};
	_proto.lab_rewardDiamondNum_i = function () {
		var t = new eui.BitmapLabel();
		this.lab_rewardDiamondNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "resultNumber_fnt";
		t.height = 48.83;
		t.letterSpacing = 5;
		t.scaleX = 0.6;
		t.scaleY = 0.4;
		t.text = "100";
		t.textAlign = "left";
		t.x = 4.87;
		t.y = 0;
		return t;
	};
	_proto.group_bottom_btn_normal_i = function () {
		var t = new eui.Group();
		this.group_bottom_btn_normal = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.visible = true;
		t.percentWidth = 100;
		t.y = 281;
		t.elementsContent = [this.btn_returnMain_i(),this.btn_restart_i()];
		return t;
	};
	_proto.btn_returnMain_i = function () {
		var t = new eui.Group();
		this.btn_returnMain = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -232.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image21_i(),this.lab_returnMain_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shuying05";
		return t;
	};
	_proto.lab_returnMain_i = function () {
		var t = new eui.Label();
		this.lab_returnMain = t;
		t.bold = true;
		t.horizontalCenter = 2.5;
		t.size = 33;
		t.text = "返回首頁";
		t.textAlign = "center";
		t.visible = false;
		t.y = 28;
		return t;
	};
	_proto.btn_restart_i = function () {
		var t = new eui.Group();
		this.btn_restart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 255;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image22_i(),this._Group15_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shuying06";
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 6.5;
		t.visible = false;
		t.y = 17;
		t.elementsContent = [this.lab_restart_i()];
		return t;
	};
	_proto.lab_restart_i = function () {
		var t = new eui.Label();
		this.lab_restart = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 33;
		t.text = "重新开始";
		t.textAlign = "center";
		t.x = -9.7;
		t.y = 11.33;
		return t;
	};
	return GameFight_Pop_WindowSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameFight.exml'] = window.GameFightSkin = (function (_super) {
	__extends(GameFightSkin, _super);
	var GameFightSkin$Skin15 = 	(function (_super) {
		__extends(GameFightSkin$Skin15, _super);
		function GameFightSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameFightSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_record_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameFightSkin$Skin15;
	})(eui.Skin);

	function GameFightSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","lab_time","icon_blue","lab_score_blue","group_blue","icon_red","icon_enemy_dead","lab_score_red","group_red","group_top","btn_record","lab_record_diamond","group_shareReward","lab_recording","group_TouTiao"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this.group_top_i(),this.group_TouTiao_i()];
	}
	var _proto = GameFightSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgBg_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.percentHeight = 100;
		t.source = "";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 322;
		t.width = 218;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.lab_time_i(),this._Label1_i(),this._Image1_i(),this.group_blue_i(),this.group_red_i()];
		return t;
	};
	_proto.lab_time_i = function () {
		var t = new eui.Label();
		this.lab_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 41.67;
		t.size = 44;
		t.stroke = 1.5;
		t.text = "100";
		t.textAlign = "right";
		t.textColor = 0xededed;
		t.verticalAlign = "middle";
		t.width = 88.34;
		t.x = 8.29;
		t.y = 65;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 41.67;
		t.size = 44;
		t.stroke = 1.5;
		t.text = "s";
		t.textAlign = "left";
		t.textColor = 0xEDEDED;
		t.verticalAlign = "middle";
		t.width = 43.34;
		t.x = 100.29;
		t.y = 65;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "pve_score_bg_png";
		t.x = 0;
		t.y = 159;
		return t;
	};
	_proto.group_blue_i = function () {
		var t = new eui.Group();
		this.group_blue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.width = 210;
		t.x = 0;
		t.y = 170;
		t.elementsContent = [this._Group2_i(),this._Image2_i(),this.lab_score_blue_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.25;
		t.width = 52;
		t.x = 16.47;
		t.y = 0.25;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.icon_blue_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.icon_blue_i = function () {
		var t = new eui.Image();
		this.icon_blue = t;
		t.height = 94;
		t.scaleX = 0.53;
		t.scaleY = 0.53;
		t.source = "skin_head1_png";
		t.width = 94;
		t.x = 6.6;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 16;
		t.source = "pve_circle_player_png";
		t.width = 16;
		t.x = 69;
		t.y = 6;
		return t;
	};
	_proto.lab_score_blue_i = function () {
		var t = new eui.Label();
		this.lab_score_blue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 108.34;
		t.x = 88.81;
		t.y = 21.25;
		return t;
	};
	_proto.group_red_i = function () {
		var t = new eui.Group();
		this.group_red = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.width = 210;
		t.x = 0;
		t.y = 247;
		t.elementsContent = [this._Group3_i(),this.icon_enemy_dead_i(),this._Image3_i(),this.lab_score_red_i()];
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.25;
		t.width = 52;
		t.x = 16.47;
		t.y = 0.25;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.icon_red_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.icon_red_i = function () {
		var t = new eui.Image();
		this.icon_red = t;
		t.height = 94;
		t.scaleX = 0.53;
		t.scaleY = 0.53;
		t.source = "skin_head1_png";
		t.width = 94;
		t.x = 6.6;
		t.y = 0;
		return t;
	};
	_proto.icon_enemy_dead_i = function () {
		var t = new eui.Image();
		this.icon_enemy_dead = t;
		t.anchorOffsetX = -5.92;
		t.anchorOffsetY = 0;
		t.height = 128;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "pve_enemy_dead_png";
		t.visible = false;
		t.width = 128;
		t.x = 15.47;
		t.y = 5.25;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "pve_circle_enemy_png";
		t.x = 69;
		t.y = 1;
		return t;
	};
	_proto.lab_score_red_i = function () {
		var t = new eui.Label();
		this.lab_score_red = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 108.34;
		t.x = 88.81;
		t.y = 21.25;
		return t;
	};
	_proto.group_TouTiao_i = function () {
		var t = new eui.Group();
		this.group_TouTiao = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn_record_i(),this.group_shareReward_i(),this.lab_recording_i()];
		return t;
	};
	_proto.btn_record_i = function () {
		var t = new XButton();
		this.btn_record = t;
		t.label = "";
		t.right = 20;
		t.top = 134;
		t.skinName = GameFightSkin$Skin15;
		return t;
	};
	_proto.group_shareReward_i = function () {
		var t = new eui.Group();
		this.group_shareReward = t;
		t.height = 59;
		t.right = 96;
		t.top = 107;
		t.width = 182;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Label2_i(),this.lab_record_diamond_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "tips_record_num_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "title_tip_png";
		t.x = 144.01;
		t.y = 7.99;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.size = 21;
		t.text = "录屏分享+";
		t.textAlign = "left";
		t.textColor = 0xeaeaea;
		t.verticalAlign = "middle";
		t.width = 95.67;
		t.x = 11.44;
		t.y = 9.92;
		return t;
	};
	_proto.lab_record_diamond_i = function () {
		var t = new eui.Label();
		this.lab_record_diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.size = 21;
		t.text = "200";
		t.textAlign = "left";
		t.textColor = 0xEAEAEA;
		t.verticalAlign = "middle";
		t.width = 41.34;
		t.x = 108.44;
		t.y = 9.92;
		return t;
	};
	_proto.lab_recording_i = function () {
		var t = new eui.Label();
		this.lab_recording = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.right = 21;
		t.size = 23;
		t.text = "录屏中";
		t.textAlign = "center";
		t.textColor = 0xf4f4f4;
		t.top = 223;
		t.verticalAlign = "middle";
		t.width = 85.17;
		return t;
	};
	return GameFightSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameItemSkin.exml'] = window.GameItemSkin = (function (_super) {
	__extends(GameItemSkin, _super);
	function GameItemSkin() {
		_super.call(this);
		this.skinParts = ["iconImg","nameLab"];
		
		this.height = 168;
		this.width = 128;
		this.elementsContent = [this.iconImg_i(),this.nameLab_i(),this._Image1_i()];
	}
	var _proto = GameItemSkin.prototype;

	_proto.iconImg_i = function () {
		var t = new eui.Image();
		this.iconImg = t;
		t.height = 256;
		t.horizontalCenter = 0;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "icon_ig_png";
		t.top = 4;
		t.width = 256;
		return t;
	};
	_proto.nameLab_i = function () {
		var t = new eui.Label();
		this.nameLab = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "SimHei";
		t.height = 43;
		t.horizontalCenter = 0.5;
		t.size = 20;
		t.text = "疯狂赛车";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 109;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.source = "more_redpoint_png";
		t.top = 0;
		return t;
	};
	return GameItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameLotteryDrawSkin.exml'] = window.GameLotteryDrawSkin = (function (_super) {
	__extends(GameLotteryDrawSkin, _super);
	var GameLotteryDrawSkin$Skin16 = 	(function (_super) {
		__extends(GameLotteryDrawSkin$Skin16, _super);
		function GameLotteryDrawSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLotteryDrawSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "tongyong02";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLotteryDrawSkin$Skin16;
	})(eui.Skin);

	function GameLotteryDrawSkin() {
		_super.call(this);
		this.skinParts = ["back_btn","box_img","boxgroup","reward_title","choose_img","boxList1","boxList2","boxList3","boxList4","light_img","free_title","Free_group","diamond_number","diamond_group","yudan_number","yudan_group","play_number","ad_group","unreward_group","Reward_group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.back_btn_i(),this.Reward_group_i()];
	}
	var _proto = GameLotteryDrawSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(12,11,4,3);
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new XButton();
		this.back_btn = t;
		t.label = "";
		t.left = 20;
		t.top = 20;
		t.skinName = GameLotteryDrawSkin$Skin16;
		return t;
	};
	_proto.Reward_group_i = function () {
		var t = new eui.Group();
		this.Reward_group = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.top = 150;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Group1_i(),this.reward_title_i(),this._Group10_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.y = 108;
		t.elementsContent = [this._Image2_i(),this.box_img_i(),this.boxgroup_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "allimages3_json.all (123)";
		t.y = 0;
		return t;
	};
	_proto.box_img_i = function () {
		var t = new eui.Image();
		this.box_img = t;
		t.right = 26;
		t.source = "new_treasurebox1_png";
		t.y = -38;
		return t;
	};
	_proto.boxgroup_i = function () {
		var t = new eui.Group();
		this.boxgroup = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 17.5;
		t.horizontalAlign = "left";
		t.paddingLeft = 113;
		t.paddingTop = 32;
		t.verticalAlign = "top";
		return t;
	};
	_proto.reward_title_i = function () {
		var t = new eui.Label();
		this.reward_title = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.text = "每旋轉8次轉盤，可獲得1個鑽石寶箱！";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = -486.5;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 180;
		t.elementsContent = [this._Image3_i(),this._Group6_i(),this.choose_img_i(),this._Group7_i(),this._Group9_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.66;
		t.scaleY = 0.66;
		t.source = "all (147)";
		t.visible = true;
		t.x = 62;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.66;
		t.scaleY = 0.66;
		t.verticalCenter = -4;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.paddingBottom = 30;
		t.paddingTop = 30;
		t.verticalAlign = "top";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 22;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 1;
		t.y = 3;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 11;
		t.y = 13;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 21;
		t.y = 23;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 31;
		t.y = 33;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 477;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages1_json.all (65)";
		t.x = 1;
		t.y = 3;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages1_json.all (65)";
		t.x = 11;
		t.y = 13;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.x = 10;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 477;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages1_json.all (65)";
		t.x = 1;
		t.y = 3;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages1_json.all (65)";
		t.x = 11;
		t.y = 13;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 10;
		t.y = 32;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 1;
		t.y = 3;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 11;
		t.y = 13;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 21;
		t.y = 23;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (65)";
		t.x = 31;
		t.y = 33;
		return t;
	};
	_proto.choose_img_i = function () {
		var t = new eui.Image();
		this.choose_img = t;
		t.height = 221;
		t.scaleX = 0.66;
		t.scaleY = 0.66;
		t.source = "all (66)";
		t.visible = false;
		t.width = 218;
		t.x = 47;
		t.y = 39;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 983;
		t.horizontalCenter = 0;
		t.scaleX = 0.66;
		t.scaleY = 0.66;
		t.verticalCenter = -4;
		t.width = 913;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.boxList1_i(),this.boxList2_i(),this.boxList3_i(),this.boxList4_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.paddingBottom = 30;
		t.paddingTop = 30;
		t.verticalAlign = "top";
		return t;
	};
	_proto.boxList1_i = function () {
		var t = new eui.List();
		this.boxList1 = t;
		t.height = 221;
		t.itemRendererSkinName = lotteryDataSkin;
		t.visible = true;
		t.width = 911;
		t.y = 17;
		t.layout = this._HorizontalLayout6_i();
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.boxList2_i = function () {
		var t = new eui.List();
		this.boxList2 = t;
		t.itemRendererSkinName = lotteryDataSkin;
		t.x = 10;
		t.y = 27;
		t.layout = this._HorizontalLayout7_i();
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 477;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.boxList3_i = function () {
		var t = new eui.List();
		this.boxList3 = t;
		t.itemRendererSkinName = lotteryDataSkin;
		t.visible = true;
		t.y = 27;
		t.layout = this._HorizontalLayout8_i();
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 477;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.boxList4_i = function () {
		var t = new eui.List();
		this.boxList4 = t;
		t.itemRendererSkinName = lotteryDataSkin;
		t.x = 10;
		t.y = 27;
		t.layout = this._HorizontalLayout9_i();
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 13;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 259;
		t.elementsContent = [this._Image16_i(),this.light_img_i(),this.Free_group_i(),this.diamond_group_i(),this.yudan_group_i(),this.ad_group_i(),this.unreward_group_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "allimages1_json.all (72)";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.light_img_i = function () {
		var t = new eui.Image();
		this.light_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "light1_png";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto.Free_group_i = function () {
		var t = new eui.Group();
		this.Free_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 145;
		t.elementsContent = [this.free_title_i()];
		return t;
	};
	_proto.free_title_i = function () {
		var t = new eui.Label();
		this.free_title = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0x946300;
		t.text = "免費";
		t.verticalCenter = 0;
		t.x = 31;
		t.y = 53;
		return t;
	};
	_proto.diamond_group_i = function () {
		var t = new eui.Group();
		this.diamond_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 1;
		t.verticalCenter = 2;
		t.visible = false;
		t.width = 150;
		t.elementsContent = [this._Image17_i(),this.diamond_number_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "diamond_1_png";
		t.verticalCenter = -33;
		t.visible = true;
		return t;
	};
	_proto.diamond_number_i = function () {
		var t = new eui.BitmapLabel();
		this.diamond_number = t;
		t.font = "loginNumbers_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "200";
		t.y = 104;
		return t;
	};
	_proto.yudan_group_i = function () {
		var t = new eui.Group();
		this.yudan_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 1;
		t.verticalCenter = 2;
		t.visible = false;
		t.width = 150;
		t.elementsContent = [this._Image18_i(),this.yudan_number_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "egg_png";
		t.verticalCenter = -10;
		return t;
	};
	_proto.yudan_number_i = function () {
		var t = new eui.BitmapLabel();
		this.yudan_number = t;
		t.font = "Reward_DayuNumber_fnt";
		t.horizontalCenter = 0;
		t.text = "200";
		t.y = 90;
		return t;
	};
	_proto.ad_group_i = function () {
		var t = new eui.Group();
		this.ad_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.horizontalCenter = 1;
		t.verticalCenter = 2;
		t.visible = false;
		t.width = 150;
		t.elementsContent = [this._Image19_i(),this._Group8_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "pve_video_start-2_cn";
		t.verticalCenter = -29;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.horizontalCenter = 0;
		t.width = 77;
		t.y = 105;
		t.layout = this._HorizontalLayout10_i();
		t.elementsContent = [this.play_number_i()];
		return t;
	};
	_proto._HorizontalLayout10_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.play_number_i = function () {
		var t = new eui.Label();
		this.play_number = t;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.stroke = 3;
		t.strokeColor = 0x8D6600;
		t.text = "3/3";
		t.x = 25;
		t.y = 6;
		return t;
	};
	_proto.unreward_group_i = function () {
		var t = new eui.Group();
		this.unreward_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image20_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "unreward_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameLotteryDrawSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainSkin.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	var GameMainSkin$Skin17 = 	(function (_super) {
		__extends(GameMainSkin$Skin17, _super);
		function GameMainSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameMainSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_record_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameMainSkin$Skin17;
	})(eui.Skin);

	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["imgBg","btn_record","lab_record_diamond","group_shareReward","lab_recording","group_TouTiao"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this.group_TouTiao_i()];
	}
	var _proto = GameMainSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.imgBg_i()];
		return t;
	};
	_proto.imgBg_i = function () {
		var t = new eui.Image();
		this.imgBg = t;
		t.percentHeight = 100;
		t.source = "allimages7_json.all (1)";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_TouTiao_i = function () {
		var t = new eui.Group();
		this.group_TouTiao = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn_record_i(),this.group_shareReward_i(),this.lab_recording_i()];
		return t;
	};
	_proto.btn_record_i = function () {
		var t = new XButton();
		this.btn_record = t;
		t.label = "";
		t.right = 20;
		t.top = 133;
		t.skinName = GameMainSkin$Skin17;
		return t;
	};
	_proto.group_shareReward_i = function () {
		var t = new eui.Group();
		this.group_shareReward = t;
		t.height = 59;
		t.right = 96;
		t.top = 106;
		t.width = 182;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this.lab_record_diamond_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tips_record_num_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "title_tip_png";
		t.x = 144.01;
		t.y = 7.99;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.size = 21;
		t.text = "录屏分享+";
		t.textAlign = "left";
		t.textColor = 0xEAEAEA;
		t.verticalAlign = "middle";
		t.width = 95.67;
		t.x = 11.44;
		t.y = 9.92;
		return t;
	};
	_proto.lab_record_diamond_i = function () {
		var t = new eui.Label();
		this.lab_record_diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.size = 21;
		t.text = "200";
		t.textAlign = "left";
		t.textColor = 0xEAEAEA;
		t.verticalAlign = "middle";
		t.width = 41.34;
		t.x = 108.44;
		t.y = 9.92;
		return t;
	};
	_proto.lab_recording_i = function () {
		var t = new eui.Label();
		this.lab_recording = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 24.67;
		t.right = 21;
		t.size = 23;
		t.text = "录屏中";
		t.textAlign = "center";
		t.textColor = 0xF4F4F4;
		t.top = 222;
		t.verticalAlign = "middle";
		t.width = 85.17;
		return t;
	};
	return GameMainSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSetting.exml'] = window.GameSettingSkin = (function (_super) {
	__extends(GameSettingSkin, _super);
	var GameSettingSkin$Skin18 = 	(function (_super) {
		__extends(GameSettingSkin$Skin18, _super);
		function GameSettingSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "SettingImg_json.evaluate ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin18;
	})(eui.Skin);

	var GameSettingSkin$Skin19 = 	(function (_super) {
		__extends(GameSettingSkin$Skin19, _super);
		function GameSettingSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "SettingImg_json.link";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin19;
	})(eui.Skin);

	var GameSettingSkin$Skin20 = 	(function (_super) {
		__extends(GameSettingSkin$Skin20, _super);
		function GameSettingSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "SettingImg_json.follow";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSettingSkin$Skin20;
	})(eui.Skin);

	var GameSettingSkin$Skin21 = 	(function (_super) {
		__extends(GameSettingSkin$Skin21, _super);
		function GameSettingSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSettingSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "tongyong02";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = true;
			return t;
		};
		return GameSettingSkin$Skin21;
	})(eui.Skin);

	function GameSettingSkin() {
		_super.call(this);
		this.skinParts = ["sound_on","sound_off","language_label","language_group","sound_label","sound_group","exit_label","exit_group","lab_rate","evaluate_btn","lab_likeus","link_btn","lab_follow","follow_btn","bottomBtnsGroup","lab_settingTitle","setting_back"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group3_i()];
	}
	var _proto = GameSettingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this.lab_settingTitle_i(),this.setting_back_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 748;
		t.top = 351;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this.sound_on_i(),this.sound_off_i(),this._Image10_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "allimages4_json.all (74)";
		t.visible = true;
		t.y = -143.64;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 238;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(77,59,53,24);
		t.source = "SettingImg_json.setting_bg1";
		t.verticalCenter = -225;
		t.visible = true;
		t.width = 568;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "allimages3_json.all (75)";
		t.top = -162;
		t.visible = true;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "allimages2_json.all (76)";
		t.top = -146;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (78)";
		t.top = 36;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -190;
		t.source = "all (80)";
		t.y = 136;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -79;
		t.source = "all (79)";
		t.x = 141;
		t.y = 125;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 205;
		t.source = "all (79)";
		t.x = 151;
		t.y = 125;
		return t;
	};
	_proto.sound_on_i = function () {
		var t = new eui.Image();
		this.sound_on = t;
		t.horizontalCenter = 205;
		t.source = "all (81)";
		t.visible = true;
		t.x = 161;
		t.y = 132;
		return t;
	};
	_proto.sound_off_i = function () {
		var t = new eui.Image();
		this.sound_off = t;
		t.horizontalCenter = -77;
		t.source = "all (81)";
		t.visible = true;
		t.x = 171;
		t.y = 131;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 99;
		t.source = "all (82)";
		t.x = 141;
		t.y = 136;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = -20;
		t.visible = true;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.language_group_i(),this.sound_group_i(),this.exit_group_i(),this.bottomBtnsGroup_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.language_group_i = function () {
		var t = new eui.Group();
		this.language_group = t;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.left = 99;
		t.right = 98;
		t.visible = false;
		t.y = -2.017;
		t.elementsContent = [this._Image11_i(),this.language_label_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.horizontalCenter = 0;
		t.source = "SettingImg_json.setting_box";
		return t;
	};
	_proto.language_label_i = function () {
		var t = new eui.Label();
		this.language_label = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "Language";
		t.textColor = 0x804D0E;
		t.verticalCenter = -10;
		return t;
	};
	_proto.sound_group_i = function () {
		var t = new eui.Group();
		this.sound_group = t;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.left = 99;
		t.right = 98;
		t.visible = true;
		t.y = 123.983;
		t.elementsContent = [this._Image12_i(),this.sound_label_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.horizontalCenter = 0;
		t.source = "SettingImg_json.setting_box";
		t.visible = false;
		return t;
	};
	_proto.sound_label_i = function () {
		var t = new eui.Label();
		this.sound_label = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "音效：關";
		t.textColor = 0x804D0E;
		t.verticalCenter = -10;
		t.visible = false;
		return t;
	};
	_proto.exit_group_i = function () {
		var t = new eui.Group();
		this.exit_group = t;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.left = 99;
		t.right = 98;
		t.visible = false;
		t.y = 249.983;
		t.elementsContent = [this._Image13_i(),this.exit_label_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "SettingImg_json.setting_box";
		return t;
	};
	_proto.exit_label_i = function () {
		var t = new eui.Label();
		this.exit_label = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "退出";
		t.textColor = 0x804D0E;
		t.verticalCenter = -10;
		return t;
	};
	_proto.bottomBtnsGroup_i = function () {
		var t = new eui.Group();
		this.bottomBtnsGroup = t;
		t.height = 200;
		t.left = 90;
		t.right = 90;
		t.visible = false;
		t.y = 355.983;
		t.elementsContent = [this.evaluate_btn_i(),this.link_btn_i(),this.follow_btn_i()];
		return t;
	};
	_proto.evaluate_btn_i = function () {
		var t = new eui.Group();
		this.evaluate_btn = t;
		t.height = 200;
		t.visible = false;
		t.width = 170;
		t.x = 23;
		t.y = 0;
		t.elementsContent = [this._XButton1_i(),this.lab_rate_i()];
		return t;
	};
	_proto._XButton1_i = function () {
		var t = new XButton();
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 19;
		t.skinName = GameSettingSkin$Skin18;
		return t;
	};
	_proto.lab_rate_i = function () {
		var t = new eui.Label();
		this.lab_rate = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 50;
		t.size = 27;
		t.text = "給我們評價";
		t.textAlign = "center";
		t.textColor = 0x804D0E;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 135;
		return t;
	};
	_proto.link_btn_i = function () {
		var t = new eui.Group();
		this.link_btn = t;
		t.height = 200;
		t.width = 170;
		t.x = 197;
		t.y = 0;
		t.elementsContent = [this._XButton2_i(),this.lab_likeus_i()];
		return t;
	};
	_proto._XButton2_i = function () {
		var t = new XButton();
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 19;
		t.skinName = GameSettingSkin$Skin19;
		return t;
	};
	_proto.lab_likeus_i = function () {
		var t = new eui.Label();
		this.lab_likeus = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 50;
		t.size = 27;
		t.text = "給我們點贊";
		t.textAlign = "center";
		t.textColor = 0x804D0E;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 135;
		return t;
	};
	_proto.follow_btn_i = function () {
		var t = new eui.Group();
		this.follow_btn = t;
		t.height = 200;
		t.width = 170;
		t.x = 370;
		t.y = 0;
		t.elementsContent = [this._XButton3_i(),this.lab_follow_i()];
		return t;
	};
	_proto._XButton3_i = function () {
		var t = new XButton();
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 19;
		t.skinName = GameSettingSkin$Skin20;
		return t;
	};
	_proto.lab_follow_i = function () {
		var t = new eui.Label();
		this.lab_follow = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 50;
		t.size = 27;
		t.text = "關註我們";
		t.textAlign = "center";
		t.textColor = 0x804D0E;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 135;
		return t;
	};
	_proto.lab_settingTitle_i = function () {
		var t = new eui.Label();
		this.lab_settingTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.text = "設置";
		t.textAlign = "center";
		t.top = 102;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 140;
		t.x = 290;
		return t;
	};
	_proto.setting_back_i = function () {
		var t = new XButton();
		this.setting_back = t;
		t.label = "";
		t.left = 30;
		t.top = 30;
		t.skinName = GameSettingSkin$Skin21;
		return t;
	};
	return GameSettingSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSignIn.exml'] = window.GameSignInSkin = (function (_super) {
	__extends(GameSignInSkin, _super);
	var GameSignInSkin$Skin22 = 	(function (_super) {
		__extends(GameSignInSkin$Skin22, _super);
		function GameSignInSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSignInSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "get_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSignInSkin$Skin22;
	})(eui.Skin);

	function GameSignInSkin() {
		_super.call(this);
		this.skinParts = ["libao_img","rotationbg","signImg","diamond_label","tip_img","video_btn","reward_label"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GameSignInSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.libao_img_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.libao_img_i = function () {
		var t = new eui.Image();
		this.libao_img = t;
		t.horizontalCenter = 0;
		t.source = "libao_png";
		t.top = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.rotationbg_i(),this._Image2_i(),this.signImg_i(),this.diamond_label_i(),this.tip_img_i()];
		return t;
	};
	_proto.rotationbg_i = function () {
		var t = new eui.Image();
		this.rotationbg = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 167.5;
		t.source = "rotationbg_png";
		t.x = 360;
		t.y = 140;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 393;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.source = "diamondbg_png";
		t.top = -50;
		return t;
	};
	_proto.signImg_i = function () {
		var t = new eui.Image();
		this.signImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "diamond_png";
		t.top = 70;
		t.x = 164;
		return t;
	};
	_proto.diamond_label_i = function () {
		var t = new eui.Image();
		this.diamond_label = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "zhuan_png";
		t.x = 290;
		t.y = 266;
		return t;
	};
	_proto.tip_img_i = function () {
		var t = new eui.Image();
		this.tip_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "title_png";
		t.x = 77;
		t.y = 378;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 350;
		t.percentWidth = 100;
		t.elementsContent = [this.video_btn_i(),this.reward_label_i()];
		return t;
	};
	_proto.video_btn_i = function () {
		var t = new XButton();
		this.video_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.skinName = GameSignInSkin$Skin22;
		return t;
	};
	_proto.reward_label_i = function () {
		var t = new eui.Label();
		this.reward_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 67;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "領取";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.visible = false;
		t.width = 183;
		t.y = 180;
		return t;
	};
	return GameSignInSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSignInDays.exml'] = window.GameSignInDaysSkin = (function (_super) {
	__extends(GameSignInDaysSkin, _super);
	var GameSignInDaysSkin$Skin23 = 	(function (_super) {
		__extends(GameSignInDaysSkin$Skin23, _super);
		function GameSignInDaysSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSignInDaysSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "tongyong02";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSignInDaysSkin$Skin23;
	})(eui.Skin);

	var GameSignInDaysSkin$Skin24 = 	(function (_super) {
		__extends(GameSignInDaysSkin$Skin24, _super);
		function GameSignInDaysSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSignInDaysSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "all (43)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return GameSignInDaysSkin$Skin24;
	})(eui.Skin);

	function GameSignInDaysSkin() {
		_super.call(this);
		this.skinParts = ["signBackBtn","signItemBg1","dayLabel1","rewardIcon1","rewardCount1","signTag1","expireBg1","expireLabel1","day1","signItemBg2","dayLabel2","rewardIcon2","rewardCount2","signTag2","expireBg2","expireLabel2","day2","signItemBg3","dayLabel3","rewardIcon3","rewardCount3","signTag3","expireBg3","expireLabel3","day3","signItemBg4","dayLabel4","rewardIcon4","rewardCount4","signTag4","expireBg4","expireLabel4","day4","signItemBg5","dayLabel5","rewardIcon5","rewardCount5","signTag5","expireBg5","expireLabel5","day5","signItemBg6","dayLabel6","rewardIcon6","rewardCount6","signTag6","expireBg6","expireLabel6","day6","signItemBg7","dayLabel7","rewardIcon7","rewardCount7","signTag7","expireBg7","expireLabel7","day7","signBtn","btnGroup","doubleCheckImg","doubleLabel","doubleGroup","signTitle"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this.signBackBtn_i(),this._Group11_i()];
	}
	var _proto = GameSignInDaysSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.signBackBtn_i = function () {
		var t = new XButton();
		this.signBackBtn = t;
		t.label = "";
		t.left = 16;
		t.top = 10;
		t.skinName = GameSignInDaysSkin$Skin23;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Group10_i(),this.btnGroup_i(),this.doubleGroup_i(),this.signTitle_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "allimages4_json.all (26)";
		t.top = 80;
		t.visible = true;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "allimages3_json.all (75)";
		t.top = 29;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "allimages2_json.all (27)";
		t.top = 56;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.left = 58;
		t.right = 52;
		t.verticalCenter = 0;
		t.visible = true;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group4_i(),this._Group8_i(),this.day7_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = true;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.day1_i(),this.day2_i(),this.day3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.day1_i = function () {
		var t = new eui.Group();
		this.day1 = t;
		t.elementsContent = [this.signItemBg1_i(),this.dayLabel1_i(),this._Group1_i(),this.expireBg1_i(),this.expireLabel1_i()];
		return t;
	};
	_proto.signItemBg1_i = function () {
		var t = new eui.Image();
		this.signItemBg1 = t;
		t.scale9Grid = new egret.Rectangle(90,94,91,93);
		t.source = "sign_item_bg_png";
		t.visible = true;
		return t;
	};
	_proto.dayLabel1_i = function () {
		var t = new eui.Label();
		this.dayLabel1 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon1_i(),this.rewardCount1_i(),this.signTag1_i()];
		return t;
	};
	_proto.rewardIcon1_i = function () {
		var t = new eui.Image();
		this.rewardIcon1 = t;
		t.horizontalCenter = 0.5;
		t.source = "diamond_1_png";
		t.verticalCenter = -6;
		return t;
	};
	_proto.rewardCount1_i = function () {
		var t = new eui.Label();
		this.rewardCount1 = t;
		t.bold = true;
		t.border = false;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X30";
		return t;
	};
	_proto.signTag1_i = function () {
		var t = new eui.Image();
		this.signTag1 = t;
		t.bottom = -19;
		t.right = -14;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg1_i = function () {
		var t = new eui.Image();
		this.expireBg1 = t;
		t.source = "red_jiaobiao1";
		t.top = 62;
		t.visible = true;
		return t;
	};
	_proto.expireLabel1_i = function () {
		var t = new eui.Label();
		this.expireLabel1 = t;
		t.bold = true;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		return t;
	};
	_proto.day2_i = function () {
		var t = new eui.Group();
		this.day2 = t;
		t.elementsContent = [this.signItemBg2_i(),this.dayLabel2_i(),this._Group2_i(),this.expireBg2_i(),this.expireLabel2_i()];
		return t;
	};
	_proto.signItemBg2_i = function () {
		var t = new eui.Image();
		this.signItemBg2 = t;
		t.source = "sign_item_bg_png";
		return t;
	};
	_proto.dayLabel2_i = function () {
		var t = new eui.Label();
		this.dayLabel2 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.strokeColor = 0xFFFFFF;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon2_i(),this.rewardCount2_i(),this.signTag2_i()];
		return t;
	};
	_proto.rewardIcon2_i = function () {
		var t = new eui.Image();
		this.rewardIcon2 = t;
		t.horizontalCenter = 0;
		t.source = "diamond_2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rewardCount2_i = function () {
		var t = new eui.Label();
		this.rewardCount2 = t;
		t.bold = true;
		t.border = false;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X30";
		return t;
	};
	_proto.signTag2_i = function () {
		var t = new eui.Image();
		this.signTag2 = t;
		t.bottom = -19;
		t.right = -14;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg2_i = function () {
		var t = new eui.Image();
		this.expireBg2 = t;
		t.height = 121;
		t.source = "red_jiaobiao1";
		t.top = 62;
		t.width = 119;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.expireLabel2_i = function () {
		var t = new eui.Label();
		this.expireLabel2 = t;
		t.bold = true;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		t.x = 5;
		t.y = 122;
		return t;
	};
	_proto.day3_i = function () {
		var t = new eui.Group();
		this.day3 = t;
		t.elementsContent = [this.signItemBg3_i(),this.dayLabel3_i(),this._Group3_i(),this.expireBg3_i(),this.expireLabel3_i()];
		return t;
	};
	_proto.signItemBg3_i = function () {
		var t = new eui.Image();
		this.signItemBg3 = t;
		t.source = "sign_item_bg_png";
		return t;
	};
	_proto.dayLabel3_i = function () {
		var t = new eui.Label();
		this.dayLabel3 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.strokeColor = 0xFFFFFF;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon3_i(),this.rewardCount3_i(),this.signTag3_i()];
		return t;
	};
	_proto.rewardIcon3_i = function () {
		var t = new eui.Image();
		this.rewardIcon3 = t;
		t.horizontalCenter = 17;
		t.source = "diamond_1_png";
		t.verticalCenter = 6;
		t.x = 20;
		t.y = 21;
		return t;
	};
	_proto.rewardCount3_i = function () {
		var t = new eui.Label();
		this.rewardCount3 = t;
		t.bold = true;
		t.border = false;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X30";
		return t;
	};
	_proto.signTag3_i = function () {
		var t = new eui.Image();
		this.signTag3 = t;
		t.bottom = -19;
		t.right = -14;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg3_i = function () {
		var t = new eui.Image();
		this.expireBg3 = t;
		t.height = 121;
		t.source = "red_jiaobiao1";
		t.top = 62;
		t.width = 119;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.expireLabel3_i = function () {
		var t = new eui.Label();
		this.expireLabel3 = t;
		t.bold = true;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		t.x = 5;
		t.y = 122;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.day4_i(),this.day5_i(),this.day6_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.day4_i = function () {
		var t = new eui.Group();
		this.day4 = t;
		t.elementsContent = [this.signItemBg4_i(),this.dayLabel4_i(),this._Group5_i(),this.expireBg4_i(),this.expireLabel4_i()];
		return t;
	};
	_proto.signItemBg4_i = function () {
		var t = new eui.Image();
		this.signItemBg4 = t;
		t.source = "sign_item_bg_png";
		return t;
	};
	_proto.dayLabel4_i = function () {
		var t = new eui.Label();
		this.dayLabel4 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.strokeColor = 0xFFFFFF;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon4_i(),this.rewardCount4_i(),this.signTag4_i()];
		return t;
	};
	_proto.rewardIcon4_i = function () {
		var t = new eui.Image();
		this.rewardIcon4 = t;
		t.horizontalCenter = 0;
		t.source = "diamond_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rewardCount4_i = function () {
		var t = new eui.Label();
		this.rewardCount4 = t;
		t.bold = true;
		t.border = false;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X30";
		return t;
	};
	_proto.signTag4_i = function () {
		var t = new eui.Image();
		this.signTag4 = t;
		t.bottom = -19;
		t.right = -10;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg4_i = function () {
		var t = new eui.Image();
		this.expireBg4 = t;
		t.height = 121;
		t.source = "red_jiaobiao1";
		t.top = 62;
		t.width = 119;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.expireLabel4_i = function () {
		var t = new eui.Label();
		this.expireLabel4 = t;
		t.bold = true;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		t.x = 5;
		t.y = 122;
		return t;
	};
	_proto.day5_i = function () {
		var t = new eui.Group();
		this.day5 = t;
		t.elementsContent = [this.signItemBg5_i(),this.dayLabel5_i(),this._Group6_i(),this.expireBg5_i(),this.expireLabel5_i()];
		return t;
	};
	_proto.signItemBg5_i = function () {
		var t = new eui.Image();
		this.signItemBg5 = t;
		t.source = "sign_item_bg_png";
		return t;
	};
	_proto.dayLabel5_i = function () {
		var t = new eui.Label();
		this.dayLabel5 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.strokeColor = 0xFFFFFF;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon5_i(),this.rewardCount5_i(),this.signTag5_i()];
		return t;
	};
	_proto.rewardIcon5_i = function () {
		var t = new eui.Image();
		this.rewardIcon5 = t;
		t.horizontalCenter = 0;
		t.source = "diamond_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rewardCount5_i = function () {
		var t = new eui.Label();
		this.rewardCount5 = t;
		t.bold = true;
		t.border = false;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X30";
		return t;
	};
	_proto.signTag5_i = function () {
		var t = new eui.Image();
		this.signTag5 = t;
		t.bottom = -19;
		t.right = -10;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg5_i = function () {
		var t = new eui.Image();
		this.expireBg5 = t;
		t.height = 121;
		t.source = "red_jiaobiao1";
		t.top = 62;
		t.width = 119;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.expireLabel5_i = function () {
		var t = new eui.Label();
		this.expireLabel5 = t;
		t.bold = true;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		t.x = 5;
		t.y = 122;
		return t;
	};
	_proto.day6_i = function () {
		var t = new eui.Group();
		this.day6 = t;
		t.elementsContent = [this.signItemBg6_i(),this.dayLabel6_i(),this._Group7_i(),this.expireBg6_i(),this.expireLabel6_i()];
		return t;
	};
	_proto.signItemBg6_i = function () {
		var t = new eui.Image();
		this.signItemBg6 = t;
		t.source = "sign_item_bg_png";
		return t;
	};
	_proto.dayLabel6_i = function () {
		var t = new eui.Label();
		this.dayLabel6 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.strokeColor = 0xFFFFFF;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon6_i(),this.rewardCount6_i(),this.signTag6_i()];
		return t;
	};
	_proto.rewardIcon6_i = function () {
		var t = new eui.Image();
		this.rewardIcon6 = t;
		t.horizontalCenter = 0;
		t.source = "diamond_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rewardCount6_i = function () {
		var t = new eui.Label();
		this.rewardCount6 = t;
		t.bold = true;
		t.border = false;
		t.bottom = 6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "X30";
		return t;
	};
	_proto.signTag6_i = function () {
		var t = new eui.Image();
		this.signTag6 = t;
		t.bottom = -19;
		t.right = -12;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg6_i = function () {
		var t = new eui.Image();
		this.expireBg6 = t;
		t.height = 121;
		t.source = "red_jiaobiao1";
		t.top = 62;
		t.width = 119;
		t.x = 0;
		t.y = 62;
		return t;
	};
	_proto.expireLabel6_i = function () {
		var t = new eui.Label();
		this.expireLabel6 = t;
		t.bold = true;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		t.x = 5;
		t.y = 122;
		return t;
	};
	_proto.day7_i = function () {
		var t = new eui.Group();
		this.day7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 579;
		t.y = 0;
		t.elementsContent = [this.signItemBg7_i(),this.dayLabel7_i(),this._Group9_i(),this.expireBg7_i(),this.expireLabel7_i()];
		return t;
	};
	_proto.signItemBg7_i = function () {
		var t = new eui.Image();
		this.signItemBg7 = t;
		t.source = "all (29)";
		return t;
	};
	_proto.dayLabel7_i = function () {
		var t = new eui.Label();
		this.dayLabel7 = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "第1天";
		t.textColor = 0xFFFFFF;
		t.top = 12;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 11;
		t.top = 52;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.rewardIcon7_i(),this.rewardCount7_i(),this.signTag7_i()];
		return t;
	};
	_proto.rewardIcon7_i = function () {
		var t = new eui.Image();
		this.rewardIcon7 = t;
		t.horizontalCenter = 0;
		t.source = "diamond_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rewardCount7_i = function () {
		var t = new eui.Label();
		this.rewardCount7 = t;
		t.border = false;
		t.bottom = 20;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0xad5221;
		t.text = "X30";
		return t;
	};
	_proto.signTag7_i = function () {
		var t = new eui.Image();
		this.signTag7 = t;
		t.bottom = 8;
		t.right = 47;
		t.source = "allimages1_json.all (32)";
		return t;
	};
	_proto.expireBg7_i = function () {
		var t = new eui.Image();
		this.expireBg7 = t;
		t.source = "red_jiaobiao1";
		t.top = 62;
		return t;
	};
	_proto.expireLabel7_i = function () {
		var t = new eui.Label();
		this.expireLabel7 = t;
		t.bold = true;
		t.height = 30;
		t.left = 5;
		t.rotation = -45;
		t.size = 30;
		t.text = "24H";
		t.textAlign = "center";
		t.top = 59;
		t.visible = true;
		t.width = 89;
		t.x = 5;
		t.y = 122;
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.bottom = 93;
		t.horizontalCenter = 0;
		t.elementsContent = [this.signBtn_i()];
		return t;
	};
	_proto.signBtn_i = function () {
		var t = new XButton();
		this.signBtn = t;
		t.bottom = -35;
		t.horizontalCenter = 0;
		t.label = "领取";
		t.skinName = GameSignInDaysSkin$Skin24;
		return t;
	};
	_proto.doubleGroup_i = function () {
		var t = new eui.Group();
		this.doubleGroup = t;
		t.bottom = 193;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 122;
		t.elementsContent = [this._Image5_i(),this.doubleCheckImg_i(),this.doubleLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "double_bg_png";
		return t;
	};
	_proto.doubleCheckImg_i = function () {
		var t = new eui.Image();
		this.doubleCheckImg = t;
		t.source = "double_check_png";
		return t;
	};
	_proto.doubleLabel_i = function () {
		var t = new eui.Label();
		this.doubleLabel = t;
		t.right = 0;
		t.size = 20;
		t.text = "双倍惊喜";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.signTitle_i = function () {
		var t = new eui.Label();
		this.signTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 39;
		t.size = 27;
		t.text = "签到";
		t.textAlign = "center";
		t.top = 110;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 178;
		t.x = 276;
		return t;
	};
	return GameSignInDaysSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStore.exml'] = window.GameStoreSkin = (function (_super) {
	__extends(GameStoreSkin, _super);
	var GameStoreSkin$Skin25 = 	(function (_super) {
		__extends(GameStoreSkin$Skin25, _super);
		function GameStoreSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameStoreSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "StoreImg_json.diamond_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameStoreSkin$Skin25;
	})(eui.Skin);

	var GameStoreSkin$Skin26 = 	(function (_super) {
		__extends(GameStoreSkin$Skin26, _super);
		function GameStoreSkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameStoreSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "StoreImg_json.ad_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameStoreSkin$Skin26;
	})(eui.Skin);

	var GameStoreSkin$Skin27 = 	(function (_super) {
		__extends(GameStoreSkin$Skin27, _super);
		function GameStoreSkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameStoreSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "StoreImg_json.store_cuo";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameStoreSkin$Skin27;
	})(eui.Skin);

	function GameStoreSkin() {
		_super.call(this);
		this.skinParts = ["diamond_number","video_btn","diamond_label","video_group","lookLabel","maxLabel","payAd_btn","store_listData","pay_scroll","title_label","store_close_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group8_i()];
	}
	var _proto = GameStoreSkin.prototype;

	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group6_i(),this._Image9_i(),this._Group7_i(),this.store_close_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.right = 0;
		t.top = 20;
		t.width = 268;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.diamond_number_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.scale9Grid = new egret.Rectangle(27,21,4,2);
		t.source = "diamond_box_png";
		t.width = 215;
		t.x = 40;
		t.y = 8;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "StoreImg_json.store_d1";
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.diamond_number_i = function () {
		var t = new eui.BitmapLabel();
		this.diamond_number = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "loginNumbers_fnt";
		t.height = 42.33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "320";
		t.width = 143.01;
		t.x = 101;
		t.y = 20;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.top = 220;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image4_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 50;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(68,42,29,14);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "StoreImg_json.store_bg";
		t.top = 0;
		t.width = 660;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 15;
		t.elementsContent = [this._Image5_i(),this.video_group_i(),this._Group3_i(),this.payAd_btn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "StoreImg_json.store_boxbg";
		t.width = 584;
		t.x = 8;
		t.y = 0;
		return t;
	};
	_proto.video_group_i = function () {
		var t = new eui.Group();
		this.video_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.left = 30;
		t.width = 350;
		t.y = 27;
		t.elementsContent = [this.video_btn_i(),this._Group2_i()];
		return t;
	};
	_proto.video_btn_i = function () {
		var t = new XButton();
		this.video_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 4;
		t.skinName = GameStoreSkin$Skin25;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 196;
		t.x = 112;
		t.y = 63;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image6_i(),this.diamond_label_i(),this._Image7_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "StoreImg_json.diamond_add";
		t.x = 21;
		t.y = 9;
		return t;
	};
	_proto.diamond_label_i = function () {
		var t = new eui.BitmapLabel();
		this.diamond_label = t;
		t.font = "storeNumber1_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "3 0";
		t.x = 43;
		t.y = 3;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "diamone_img_png";
		t.x = 108;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.left = 350;
		t.verticalCenter = 50;
		t.width = 60;
		t.elementsContent = [this.lookLabel_i(),this.maxLabel_i(),this._Label1_i()];
		return t;
	};
	_proto.lookLabel_i = function () {
		var t = new eui.Label();
		this.lookLabel = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "0";
		t.textColor = 0xE06110;
		t.x = 13;
		t.y = 0;
		return t;
	};
	_proto.maxLabel_i = function () {
		var t = new eui.Label();
		this.maxLabel = t;
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "3";
		t.textColor = 0xE06110;
		t.x = 40;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "/";
		t.textColor = 0xE06110;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.payAd_btn_i = function () {
		var t = new XButton();
		this.payAd_btn = t;
		t.label = "";
		t.right = 20;
		t.y = 29;
		t.skinName = GameStoreSkin$Skin26;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 100;
		t.horizontalCenter = 0;
		t.top = 210;
		t.width = 600;
		t.elementsContent = [this._Image8_i(),this.pay_scroll_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(53,40,15,6);
		t.source = "StoreImg_json.store_bg1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.pay_scroll_i = function () {
		var t = new eui.Scroller();
		this.pay_scroll = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.store_listData_i();
		return t;
	};
	_proto.store_listData_i = function () {
		var t = new eui.List();
		this.store_listData = t;
		t.itemRendererSkinName = ranklistDataSkin;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.paddingBottom = 20;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "StoreImg_json.store_peng";
		t.top = 130;
		t.width = 692;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.horizontalCenter = 0;
		t.top = 60;
		t.width = 262;
		t.elementsContent = [this._Image10_i(),this.title_label_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages3_json.all (75)";
		t.width = 262;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_label_i = function () {
		var t = new eui.Label();
		this.title_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 36.67;
		t.size = 25;
		t.text = "商城";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 149.99;
		t.x = 56.67;
		t.y = 21.678;
		return t;
	};
	_proto.store_close_btn_i = function () {
		var t = new XButton();
		this.store_close_btn = t;
		t.horizontalCenter = 310;
		t.label = "";
		t.top = 170;
		t.skinName = GameStoreSkin$Skin27;
		return t;
	};
	return GameStoreSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameTaskItem.exml'] = window.GameTaskItemSkin = (function (_super) {
	__extends(GameTaskItemSkin, _super);
	var GameTaskItemSkin$Skin28 = 	(function (_super) {
		__extends(GameTaskItemSkin$Skin28, _super);
		function GameTaskItemSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameTaskItemSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "renwu03";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.name = "labelDisplay";
			t.size = 60;
			t.stroke = 3;
			t.strokeColor = 0x005C05;
			t.text = "4545";
			t.verticalCenter = -6;
			t.visible = false;
			return t;
		};
		return GameTaskItemSkin$Skin28;
	})(eui.Skin);

	function GameTaskItemSkin() {
		_super.call(this);
		this.skinParts = ["explainLabel","rewardIcon","rewardCount","rewardGroup","progressF","progressLabel","btn"];
		
		this.height = 275;
		this.width = 580;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = GameTaskItemSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.explainLabel_i(),this.rewardGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "allimages3_json.all (52)";
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "all (53)";
		t.x = 17;
		t.y = 21;
		return t;
	};
	_proto.explainLabel_i = function () {
		var t = new eui.Label();
		this.explainLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 118;
		t.size = 30;
		t.text = "今天玩任务模式5局";
		t.textAlign = "left";
		t.textColor = 0xA54321;
		t.verticalAlign = "middle";
		t.width = 237;
		t.wordWrap = true;
		t.x = 155.744;
		t.y = 24;
		return t;
	};
	_proto.rewardGroup_i = function () {
		var t = new eui.Group();
		this.rewardGroup = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.right = 20;
		t.verticalCenter = 21;
		t.width = 145;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.rewardIcon_i(),this.rewardCount_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.rewardIcon_i = function () {
		var t = new eui.Image();
		this.rewardIcon = t;
		t.left = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "png_result_diamoneImg_new";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rewardCount_i = function () {
		var t = new eui.Label();
		this.rewardCount = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 41;
		t.stroke = 3;
		t.text = "50";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.x = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.visible = true;
		t.y = 188;
		t.elementsContent = [this._Image3_i(),this.progressF_i(),this.progressLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "allimages3_json.all (49)";
		t.visible = true;
		return t;
	};
	_proto.progressF_i = function () {
		var t = new eui.Image();
		this.progressF = t;
		t.source = "allimages3_json.all (50)";
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 4;
		return t;
	};
	_proto.progressLabel_i = function () {
		var t = new eui.Label();
		this.progressLabel = t;
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.stroke = 2;
		t.strokeColor = 0x004618;
		t.text = "3/5";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 1.5;
		t.visible = true;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 70;
		t.percentWidth = 100;
		t.x = 8;
		t.y = 234;
		t.elementsContent = [this.btn_i()];
		return t;
	};
	_proto.btn_i = function () {
		var t = new XButton();
		this.btn = t;
		t.horizontalCenter = 0;
		t.label = "去完成";
		t.y = 4;
		t.skinName = GameTaskItemSkin$Skin28;
		return t;
	};
	return GameTaskItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameTaskSkin.exml'] = window.GameTaskSkin = (function (_super) {
	__extends(GameTaskSkin, _super);
	var GameTaskSkin$Skin29 = 	(function (_super) {
		__extends(GameTaskSkin$Skin29, _super);
		function GameTaskSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameTaskSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "tongyong02";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameTaskSkin$Skin29;
	})(eui.Skin);

	function GameTaskSkin() {
		_super.call(this);
		this.skinParts = ["taskList","task_title","task_back"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Image1_i(),this._Group2_i()];
	}
	var _proto = GameTaskSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this.task_title_i(),this.task_back_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 1020;
		t.top = 134;
		t.percentWidth = 100;
		t.x = 17;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(94,74,20,22);
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "allimages5_json.all (46)";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 201;
		t.scale9Grid = new egret.Rectangle(110,77,13,16);
		t.source = "SettingImg_json.setting_bg1";
		t.top = 106;
		t.visible = false;
		t.width = 580;
		t.x = 70;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "allimages3_json.all (75)";
		t.top = -107;
		t.visible = true;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "all (47)";
		t.top = -86;
		t.visible = true;
		t.x = 100;
		t.y = -97;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.bottom = 202;
		t.top = 60;
		t.width = 580;
		t.x = 70;
		t.viewport = this.taskList_i();
		return t;
	};
	_proto.taskList_i = function () {
		var t = new eui.List();
		this.taskList = t;
		t.anchorOffsetY = 0;
		t.height = 714.235;
		t.itemRendererSkinName = GameTaskItemSkin;
		t.x = 0;
		t.y = 2.918;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 70;
		t.horizontalAlign = "center";
		t.paddingBottom = 15;
		t.paddingTop = 15;
		t.verticalAlign = "top";
		return t;
	};
	_proto.task_title_i = function () {
		var t = new eui.Label();
		this.task_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.text = "日常任务";
		t.textAlign = "center";
		t.top = 110;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 140;
		t.x = 290;
		return t;
	};
	_proto.task_back_i = function () {
		var t = new XButton();
		this.task_back = t;
		t.label = "";
		t.left = 10;
		t.top = 20;
		t.skinName = GameTaskSkin$Skin29;
		return t;
	};
	return GameTaskSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingMainUISkin.exml'] = window.LoadingMainUISkin = (function (_super) {
	__extends(LoadingMainUISkin, _super);
	function LoadingMainUISkin() {
		_super.call(this);
		this.skinParts = ["loadbarBg","proslabel","img1","masking"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LoadingMainUISkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "preload_bg_png";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "birdtitle";
		t.top = 136;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 58;
		t.horizontalCenter = 0;
		t.elementsContent = [this.loadbarBg_i(),this._Image3_i(),this.proslabel_i(),this.img1_i(),this.masking_i()];
		return t;
	};
	_proto.loadbarBg_i = function () {
		var t = new eui.Image();
		this.loadbarBg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "PreloadMain_json.preload_kuang_png";
		t.y = 70;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "PreloadMain_json.preload_title_png";
		t.y = 149;
		return t;
	};
	_proto.proslabel_i = function () {
		var t = new eui.BitmapLabel();
		this.proslabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "loadingNumber_fnt";
		t.height = 36;
		t.horizontalCenter = 0;
		t.text = "0%";
		t.y = 30;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "PreloadMain_json.preload_tiao1_png";
		t.y = 79;
		return t;
	};
	_proto.masking_i = function () {
		var t = new eui.Image();
		this.masking = t;
		t.scale9Grid = new egret.Rectangle(29,9,3,3);
		t.source = "PreloadMain_json.preload_tiao1_png";
		t.width = 0;
		t.x = 20;
		t.y = 79;
		return t;
	};
	return LoadingMainUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginMainSkin.exml'] = window.LoginMainSkin = (function (_super) {
	__extends(LoginMainSkin, _super);
	var LoginMainSkin$Skin30 = 	(function (_super) {
		__extends(LoginMainSkin$Skin30, _super);
		function LoginMainSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "store_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin30;
	})(eui.Skin);

	var LoginMainSkin$Skin31 = 	(function (_super) {
		__extends(LoginMainSkin$Skin31, _super);
		function LoginMainSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "allimages1_json.all (73)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin31;
	})(eui.Skin);

	var LoginMainSkin$Skin32 = 	(function (_super) {
		__extends(LoginMainSkin$Skin32, _super);
		function LoginMainSkin$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_record_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin32;
	})(eui.Skin);

	var LoginMainSkin$Skin33 = 	(function (_super) {
		__extends(LoginMainSkin$Skin33, _super);
		function LoginMainSkin$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.5;
			t.scaleY = 0.5;
			t.source = "skin_head1_png";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.bottom = -18;
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 3;
			t.text = "200";
			t.textColor = 0xFFFFFF;
			return t;
		};
		return LoginMainSkin$Skin33;
	})(eui.Skin);

	var LoginMainSkin$Skin34 = 	(function (_super) {
		__extends(LoginMainSkin$Skin34, _super);
		function LoginMainSkin$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "allimages1_json.all (5)";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin34;
	})(eui.Skin);

	var LoginMainSkin$Skin35 = 	(function (_super) {
		__extends(LoginMainSkin$Skin35, _super);
		function LoginMainSkin$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gift_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin35;
	})(eui.Skin);

	var LoginMainSkin$Skin36 = 	(function (_super) {
		__extends(LoginMainSkin$Skin36, _super);
		function LoginMainSkin$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (2)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin36;
	})(eui.Skin);

	var LoginMainSkin$Skin37 = 	(function (_super) {
		__extends(LoginMainSkin$Skin37, _super);
		function LoginMainSkin$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (1)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin37;
	})(eui.Skin);

	var LoginMainSkin$Skin38 = 	(function (_super) {
		__extends(LoginMainSkin$Skin38, _super);
		function LoginMainSkin$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "new_startbtn";
			t.x = 0;
			t.y = 0;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "startbtn-1";
			t.verticalCenter = -10;
			return t;
		};
		return LoginMainSkin$Skin38;
	})(eui.Skin);

	var LoginMainSkin$Skin39 = 	(function (_super) {
		__extends(LoginMainSkin$Skin39, _super);
		function LoginMainSkin$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "allimages3_json.all (120)";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			t.visible = false;
			return t;
		};
		return LoginMainSkin$Skin39;
	})(eui.Skin);

	var LoginMainSkin$Skin40 = 	(function (_super) {
		__extends(LoginMainSkin$Skin40, _super);
		function LoginMainSkin$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "new_pve_video_start_cn";
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.horizontalCenter = 0;
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "pve_video_start-1_cn";
			t.verticalCenter = -11;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin40;
	})(eui.Skin);

	var LoginMainSkin$Skin41 = 	(function (_super) {
		__extends(LoginMainSkin$Skin41, _super);
		function LoginMainSkin$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "allimages3_json.all (25)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin41;
	})(eui.Skin);

	var LoginMainSkin$Skin42 = 	(function (_super) {
		__extends(LoginMainSkin$Skin42, _super);
		function LoginMainSkin$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (126)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin42;
	})(eui.Skin);

	var LoginMainSkin$Skin43 = 	(function (_super) {
		__extends(LoginMainSkin$Skin43, _super);
		function LoginMainSkin$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (121)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin43;
	})(eui.Skin);

	var LoginMainSkin$Skin44 = 	(function (_super) {
		__extends(LoginMainSkin$Skin44, _super);
		function LoginMainSkin$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (45)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin44;
	})(eui.Skin);

	var LoginMainSkin$Skin45 = 	(function (_super) {
		__extends(LoginMainSkin$Skin45, _super);
		function LoginMainSkin$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin45;
	})(eui.Skin);

	var LoginMainSkin$Skin46 = 	(function (_super) {
		__extends(LoginMainSkin$Skin46, _super);
		function LoginMainSkin$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (126)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin46;
	})(eui.Skin);

	var LoginMainSkin$Skin47 = 	(function (_super) {
		__extends(LoginMainSkin$Skin47, _super);
		function LoginMainSkin$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (121)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin47;
	})(eui.Skin);

	var LoginMainSkin$Skin48 = 	(function (_super) {
		__extends(LoginMainSkin$Skin48, _super);
		function LoginMainSkin$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginMainSkin$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "allimages1_json.all (45)";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginMainSkin$Skin48;
	})(eui.Skin);

	function LoginMainSkin() {
		_super.call(this);
		this.skinParts = ["egg_bgImage","adddamindnum","numbers","daminds","setting_btn","OverseaGroup","btn_record","Group_TouTiao","eggNum_label","DayuGroup","Title_Img","sign_btn","daysLabel","signRedPoint","signGroup","award","awardRedPoint","free_label","award_group","gift_btn","gift_group","listSkin","scrollSkin","leftArrow","rightArrow","buy_Img","skin_paynumber","buyskinbtn","have","effectBg","effectIcon","effectLabel1","effectLabel2","effectGroup","chooseskin","start_game_btn","video_play_btn","btn_pve","btn_pve_video","turntable_btn","turntabletan_img","task_btn","taskRedPoint","taskGroup","rankBtn","shareBtn","show_numLabel","shareReward_group","OverseaBtns","turntable_dayu_btn","turntabletan_dayu_img","task_btn1","taskRedPoint1","taskGroup1","rankBtn1","DayuBtn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group9_i()];
	}
	var _proto = LoginMainSkin.prototype;

	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.OverseaGroup_i(),this.Group_TouTiao_i(),this.DayuGroup_i(),this.Title_Img_i(),this.signGroup_i(),this._Group1_i(),this.gift_group_i(),this.chooseskin_i(),this.start_game_btn_i(),this.video_play_btn_i(),this.btn_pve_i(),this.btn_pve_video_i(),this.OverseaBtns_i(),this.DayuBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.percentHeight = 100;
		t.source = "allimages8_json.all (2)";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.scaleX = 0.668;
		t.scaleY = 0.68;
		t.source = "xialan";
		t.visible = true;
		t.x = 10;
		t.y = 1156;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = -2;
		t.scaleX = 0.668;
		t.scaleY = 0.668;
		t.source = "allimages2_json.all (128)";
		t.visible = true;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.668;
		t.scaleY = 0.668;
		t.source = "allimages2_json.all (128)";
		t.visible = true;
		t.y = 1150;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.right = -3;
		t.scaleX = 0.668;
		t.scaleY = 0.668;
		t.source = "allimages2_json.all (128)";
		t.visible = true;
		t.y = 1160;
		return t;
	};
	_proto.OverseaGroup_i = function () {
		var t = new eui.Group();
		this.OverseaGroup = t;
		t.visible = true;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.daminds_i(),this.setting_btn_i()];
		return t;
	};
	_proto.daminds_i = function () {
		var t = new eui.Group();
		this.daminds = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 450;
		t.y = 20;
		t.elementsContent = [this.egg_bgImage_i(),this.adddamindnum_i(),this._Image6_i(),this.numbers_i()];
		return t;
	};
	_proto.egg_bgImage_i = function () {
		var t = new eui.Image();
		this.egg_bgImage = t;
		t.height = 74;
		t.scale9Grid = new egret.Rectangle(27,32,19,27);
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "allimages1_json.all (3)";
		t.visible = true;
		t.width = 339;
		t.x = 35;
		t.y = 8;
		return t;
	};
	_proto.adddamindnum_i = function () {
		var t = new XButton();
		this.adddamindnum = t;
		t.label = "";
		t.visible = false;
		t.x = 190;
		t.y = 0;
		t.skinName = LoginMainSkin$Skin30;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "diamond_1_png";
		t.x = -21;
		t.y = -9;
		return t;
	};
	_proto.numbers_i = function () {
		var t = new eui.BitmapLabel();
		this.numbers = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "loginNumbers_fnt";
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.text = "0";
		t.textAlign = "center";
		t.width = 265.27;
		t.x = 74;
		t.y = 12;
		return t;
	};
	_proto.setting_btn_i = function () {
		var t = new XButton();
		this.setting_btn = t;
		t.label = "";
		t.left = 6;
		t.top = 7;
		t.skinName = LoginMainSkin$Skin31;
		return t;
	};
	_proto.Group_TouTiao_i = function () {
		var t = new eui.Group();
		this.Group_TouTiao = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.btn_record_i()];
		return t;
	};
	_proto.btn_record_i = function () {
		var t = new XButton();
		this.btn_record = t;
		t.label = "";
		t.right = 20;
		t.top = 119;
		t.skinName = LoginMainSkin$Skin32;
		return t;
	};
	_proto.DayuGroup_i = function () {
		var t = new eui.Group();
		this.DayuGroup = t;
		t.height = 90;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.eggNum_label_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 56;
		t.left = 60;
		t.scale9Grid = new egret.Rectangle(30,22,2,1);
		t.source = "diamond_box_png";
		t.top = 20;
		t.width = 210;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.left = 30;
		t.source = "egg_png";
		t.top = 10;
		return t;
	};
	_proto.eggNum_label_i = function () {
		var t = new eui.BitmapLabel();
		this.eggNum_label = t;
		t.font = "loginNumbers_fnt";
		t.left = 120;
		t.text = "0";
		t.top = 35;
		return t;
	};
	_proto.Title_Img_i = function () {
		var t = new eui.Image();
		this.Title_Img = t;
		t.horizontalCenter = 9;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "birdtitle";
		t.y = 99;
		return t;
	};
	_proto.signGroup_i = function () {
		var t = new eui.Group();
		this.signGroup = t;
		t.left = 10;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.top = 134;
		t.elementsContent = [this._Image9_i(),this.sign_btn_i(),this.daysLabel_i(),this.signRedPoint_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "xuanxuan-image";
		return t;
	};
	_proto.sign_btn_i = function () {
		var t = new XButton();
		this.sign_btn = t;
		t.horizontalCenter = 0;
		t.label = "100";
		t.verticalCenter = 0;
		t.visible = true;
		t.skinName = LoginMainSkin$Skin33;
		return t;
	};
	_proto.daysLabel_i = function () {
		var t = new eui.Label();
		this.daysLabel = t;
		t.bold = true;
		t.bottom = -47;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 45;
		t.stroke = 3;
		t.strokeColor = 0x009EE1;
		t.text = "DAY5";
		t.visible = true;
		return t;
	};
	_proto.signRedPoint_i = function () {
		var t = new eui.Image();
		this.signRedPoint = t;
		t.height = 30;
		t.right = 8;
		t.source = "red_point_png";
		t.top = 8;
		t.visible = true;
		t.width = 30;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 10;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.top = 276;
		t.elementsContent = [this.award_i(),this.awardRedPoint_i(),this.award_group_i()];
		return t;
	};
	_proto.award_i = function () {
		var t = new XButton();
		this.award = t;
		t.height = 100;
		t.label = "";
		t.top = 0;
		t.visible = true;
		t.width = 99;
		t.x = 0;
		t.skinName = LoginMainSkin$Skin34;
		return t;
	};
	_proto.awardRedPoint_i = function () {
		var t = new eui.Image();
		this.awardRedPoint = t;
		t.height = 30;
		t.left = 8;
		t.source = "red_point_png";
		t.top = 8;
		t.visible = true;
		t.width = 30;
		return t;
	};
	_proto.award_group_i = function () {
		var t = new eui.Group();
		this.award_group = t;
		t.anchorOffsetY = 84;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.x = 121;
		t.y = 44;
		t.elementsContent = [this._Image10_i(),this.free_label_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "allimages1_json.all (7)";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.free_label_i = function () {
		var t = new eui.Label();
		this.free_label = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Helvetica";
		t.height = 67;
		t.size = 40;
		t.text = "+30";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = true;
		t.width = 107;
		t.x = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.36;
		t.scaleY = 0.36;
		t.source = "diamond_1_png";
		t.x = 103;
		t.y = 7;
		return t;
	};
	_proto.gift_group_i = function () {
		var t = new eui.Group();
		this.gift_group = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.right = 0;
		t.top = 200;
		t.visible = false;
		t.width = 144;
		t.elementsContent = [this.gift_btn_i(),this._Label1_i()];
		return t;
	};
	_proto.gift_btn_i = function () {
		var t = new XButton();
		this.gift_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 80;
		t.y = 4;
		t.skinName = LoginMainSkin$Skin35;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0xd60000;
		t.text = "限量礼包";
		t.y = 74;
		return t;
	};
	_proto.chooseskin_i = function () {
		var t = new eui.Group();
		this.chooseskin = t;
		t.anchorOffsetY = 0;
		t.top = 405;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image12_i(),this.scrollSkin_i(),this.leftArrow_i(),this.rightArrow_i(),this._Group2_i(),this.effectGroup_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 309;
		t.left = 20;
		t.right = 20;
		t.source = "skinbg_png";
		t.visible = false;
		t.width = 590;
		t.y = 0;
		return t;
	};
	_proto.scrollSkin_i = function () {
		var t = new eui.Scroller();
		this.scrollSkin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 222;
		t.left = 80;
		t.right = 80;
		t.scrollPolicyV = "off";
		t.y = 2;
		t.viewport = this.listSkin_i();
		return t;
	};
	_proto.listSkin_i = function () {
		var t = new eui.Group();
		this.listSkin = t;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 60;
		t.horizontalAlign = "center";
		t.paddingBottom = 0;
		t.paddingLeft = 210;
		t.paddingRight = 270;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.leftArrow_i = function () {
		var t = new XButton();
		this.leftArrow = t;
		t.height = 82;
		t.label = "";
		t.left = 20;
		t.width = 57;
		t.y = 80;
		t.skinName = LoginMainSkin$Skin36;
		return t;
	};
	_proto.rightArrow_i = function () {
		var t = new XButton();
		this.rightArrow = t;
		t.height = 82;
		t.label = "";
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 57;
		t.y = 80;
		t.skinName = LoginMainSkin$Skin37;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.horizontalCenter = 0;
		t.verticalCenter = 127;
		t.width = 400;
		t.elementsContent = [this.buyskinbtn_i(),this.have_i()];
		return t;
	};
	_proto.buyskinbtn_i = function () {
		var t = new eui.Group();
		this.buyskinbtn = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.y = 0;
		t.elementsContent = [this.buy_Img_i(),this.skin_paynumber_i()];
		return t;
	};
	_proto.buy_Img_i = function () {
		var t = new eui.Image();
		this.buy_Img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages2_json.all (23)";
		t.x = 10;
		t.y = 0;
		return t;
	};
	_proto.skin_paynumber_i = function () {
		var t = new eui.BitmapLabel();
		this.skin_paynumber = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "loginNumbers_fnt";
		t.text = "0";
		t.textAlign = "center";
		t.width = 206;
		t.x = 142;
		t.y = 33;
		return t;
	};
	_proto.have_i = function () {
		var t = new eui.Image();
		this.have = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.source = "new_you_png";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.effectGroup_i = function () {
		var t = new eui.Group();
		this.effectGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.top = 10;
		t.width = 100;
		t.x = 396;
		t.elementsContent = [this.effectBg_i(),this.effectIcon_i(),this.effectLabel1_i(),this.effectLabel2_i()];
		return t;
	};
	_proto.effectBg_i = function () {
		var t = new eui.Image();
		this.effectBg = t;
		t.scale9Grid = new egret.Rectangle(36,17,7,4);
		t.source = "skintipbg_png";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.effectIcon_i = function () {
		var t = new eui.Image();
		this.effectIcon = t;
		t.source = "skinvideo_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 20;
		return t;
	};
	_proto.effectLabel1_i = function () {
		var t = new eui.Label();
		this.effectLabel1 = t;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "X30";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 53;
		return t;
	};
	_proto.effectLabel2_i = function () {
		var t = new eui.Label();
		this.effectLabel2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 3.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "15:40";
		t.textAlign = "center";
		t.verticalCenter = 0.5;
		t.width = 69;
		return t;
	};
	_proto.start_game_btn_i = function () {
		var t = new XButton();
		this.start_game_btn = t;
		t.bottom = 347;
		t.currentState = "up";
		t.horizontalCenter = 0;
		t.label = "";
		t.visible = true;
		t.skinName = LoginMainSkin$Skin38;
		return t;
	};
	_proto.video_play_btn_i = function () {
		var t = new XButton();
		this.video_play_btn = t;
		t.bottom = 347;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.visible = false;
		t.skinName = LoginMainSkin$Skin39;
		return t;
	};
	_proto.btn_pve_i = function () {
		var t = new XButton();
		this.btn_pve = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 171;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.visible = true;
		t.skinName = LoginMainSkin$Skin40;
		return t;
	};
	_proto.btn_pve_video_i = function () {
		var t = new XButton();
		this.btn_pve_video = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 171;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.visible = false;
		t.skinName = LoginMainSkin$Skin41;
		return t;
	};
	_proto.OverseaBtns_i = function () {
		var t = new eui.Group();
		this.OverseaBtns = t;
		t.bottom = -23;
		t.height = 170;
		t.horizontalCenter = -11;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Group3_i(),this.taskGroup_i(),this._Group4_i(),this._Group6_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 128;
		t.horizontalAlign = "center";
		t.paddingLeft = 86.5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 87;
		t.elementsContent = [this.turntable_btn_i(),this.turntabletan_img_i()];
		return t;
	};
	_proto.turntable_btn_i = function () {
		var t = new XButton();
		this.turntable_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = LoginMainSkin$Skin42;
		return t;
	};
	_proto.turntabletan_img_i = function () {
		var t = new eui.Image();
		this.turntabletan_img = t;
		t.right = -4;
		t.source = "turntable_tan_png";
		t.top = 0;
		t.visible = true;
		return t;
	};
	_proto.taskGroup_i = function () {
		var t = new eui.Group();
		this.taskGroup = t;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.visible = true;
		t.x = 341;
		t.y = 79;
		t.elementsContent = [this.task_btn_i(),this.taskRedPoint_i(),this._Image13_i()];
		return t;
	};
	_proto.task_btn_i = function () {
		var t = new XButton();
		this.task_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.skinName = LoginMainSkin$Skin43;
		return t;
	};
	_proto.taskRedPoint_i = function () {
		var t = new eui.Image();
		this.taskRedPoint = t;
		t.height = 25;
		t.right = 33;
		t.source = "red_point_png";
		t.top = 12;
		t.width = 25;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "xialan-4";
		t.visible = true;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.verticalCenter = 0;
		t.visible = true;
		t.x = 461;
		t.elementsContent = [this.rankBtn_i(),this._Image14_i()];
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new XButton();
		this.rankBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.skinName = LoginMainSkin$Skin44;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "xialan-4";
		t.visible = true;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 130;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 130;
		t.elementsContent = [this.shareBtn_i(),this.shareReward_group_i()];
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new XButton();
		this.shareBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.skinName = LoginMainSkin$Skin45;
		return t;
	};
	_proto.shareReward_group_i = function () {
		var t = new eui.Group();
		this.shareReward_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 146;
		t.x = 70;
		t.y = 12;
		t.elementsContent = [this._Image15_i(),this._Group5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "tipbg_png";
		t.top = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.show_numLabel_i(),this._Image16_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingLeft = 15;
		t.paddingRight = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.show_numLabel_i = function () {
		var t = new eui.Label();
		this.show_numLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.size = 27;
		t.text = "+100";
		t.verticalAlign = "middle";
		t.x = 10;
		t.y = 2;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "title_tip_png";
		t.x = 89;
		t.y = 21;
		return t;
	};
	_proto.DayuBtn_i = function () {
		var t = new eui.Group();
		this.DayuBtn = t;
		t.height = 170;
		t.horizontalCenter = 0;
		t.top = 885;
		t.visible = false;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Group7_i(),this.taskGroup1_i(),this._Group8_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = -140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 200;
		t.x = 155;
		t.y = -850;
		t.elementsContent = [this.turntable_dayu_btn_i(),this.turntabletan_dayu_img_i()];
		return t;
	};
	_proto.turntable_dayu_btn_i = function () {
		var t = new XButton();
		this.turntable_dayu_btn = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 97;
		t.skinName = LoginMainSkin$Skin46;
		return t;
	};
	_proto.turntabletan_dayu_img_i = function () {
		var t = new eui.Image();
		this.turntabletan_dayu_img = t;
		t.horizontalCenter = 35;
		t.source = "turntable_tan_png";
		t.visible = true;
		t.y = 20;
		return t;
	};
	_proto.taskGroup1_i = function () {
		var t = new eui.Group();
		this.taskGroup1 = t;
		t.percentHeight = 100;
		t.visible = true;
		t.width = 130;
		t.x = 599;
		t.y = 79;
		t.elementsContent = [this.task_btn1_i(),this.taskRedPoint1_i()];
		return t;
	};
	_proto.task_btn1_i = function () {
		var t = new XButton();
		this.task_btn1 = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 97;
		t.skinName = LoginMainSkin$Skin47;
		return t;
	};
	_proto.taskRedPoint1_i = function () {
		var t = new eui.Image();
		this.taskRedPoint1 = t;
		t.horizontalCenter = 30;
		t.source = "red_point_png";
		t.verticalCenter = -41;
		t.visible = true;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = -140;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 200;
		t.elementsContent = [this.rankBtn1_i()];
		return t;
	};
	_proto.rankBtn1_i = function () {
		var t = new XButton();
		this.rankBtn1 = t;
		t.height = 101;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = true;
		t.width = 97;
		t.skinName = LoginMainSkin$Skin48;
		return t;
	};
	return LoginMainSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoginType.exml'] = window.LoginTypeSkin = (function (_super) {
	__extends(LoginTypeSkin, _super);
	var LoginTypeSkin$Skin49 = 	(function (_super) {
		__extends(LoginTypeSkin$Skin49, _super);
		function LoginTypeSkin$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginTypeSkin$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "facebook_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginTypeSkin$Skin49;
	})(eui.Skin);

	var LoginTypeSkin$Skin50 = 	(function (_super) {
		__extends(LoginTypeSkin$Skin50, _super);
		function LoginTypeSkin$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginTypeSkin$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "google_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginTypeSkin$Skin50;
	})(eui.Skin);

	var LoginTypeSkin$Skin51 = 	(function (_super) {
		__extends(LoginTypeSkin$Skin51, _super);
		function LoginTypeSkin$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginTypeSkin$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.name = "bgImg";
			t.scaleX = 0.667;
			t.scaleY = 0.667;
			t.source = "guest_btn";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginTypeSkin$Skin51;
	})(eui.Skin);

	function LoginTypeSkin() {
		_super.call(this);
		this.skinParts = ["titleImg","facebook_btn","tipImg1","google_btn","tourist_btn"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = LoginTypeSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.titleImg_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "preload_bg_png";
		t.percentWidth = 100;
		t.x = 0.5;
		t.y = 0;
		return t;
	};
	_proto.titleImg_i = function () {
		var t = new eui.Image();
		this.titleImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "birdtitle";
		t.top = 136;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.verticalCenter = 60;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.facebook_btn_i(),this.tipImg1_i()];
		return t;
	};
	_proto.facebook_btn_i = function () {
		var t = new XButton();
		this.facebook_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 147;
		t.skinName = LoginTypeSkin$Skin49;
		return t;
	};
	_proto.tipImg1_i = function () {
		var t = new eui.Image();
		this.tipImg1 = t;
		t.anchorOffsetY = 75;
		t.rotation = 0;
		t.source = "logintips_png";
		t.x = 550;
		t.y = 50;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.verticalCenter = 210;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.google_btn_i()];
		return t;
	};
	_proto.google_btn_i = function () {
		var t = new XButton();
		this.google_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 147;
		t.skinName = LoginTypeSkin$Skin50;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.verticalCenter = 360;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.tourist_btn_i()];
		return t;
	};
	_proto.tourist_btn_i = function () {
		var t = new XButton();
		this.tourist_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 0;
		t.skinName = LoginTypeSkin$Skin51;
		return t;
	};
	return LoginTypeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/lotteryData.exml'] = window.lotteryDataSkin = (function (_super) {
	__extends(lotteryDataSkin, _super);
	function lotteryDataSkin() {
		_super.call(this);
		this.skinParts = ["diamond_label","diamond","dayu_label","dayan","skin_img","expire_img","expireLabel","skingroup"];
		
		this.elementsContent = [this.diamond_i(),this.dayan_i(),this.skingroup_i()];
	}
	var _proto = lotteryDataSkin.prototype;

	_proto.diamond_i = function () {
		var t = new eui.Group();
		this.diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221;
		t.visible = false;
		t.width = 218;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.diamond_label_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "diamond_1_png";
		t.verticalCenter = -35;
		return t;
	};
	_proto.diamond_label_i = function () {
		var t = new eui.BitmapLabel();
		this.diamond_label = t;
		t.bottom = 18;
		t.font = "loginNumbers_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "X100";
		return t;
	};
	_proto.dayan_i = function () {
		var t = new eui.Group();
		this.dayan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221;
		t.visible = false;
		t.width = 218;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.dayu_label_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "egg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.dayu_label_i = function () {
		var t = new eui.BitmapLabel();
		this.dayu_label = t;
		t.font = "Reward_DayuNumber1_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "X100";
		t.y = 166;
		return t;
	};
	_proto.skingroup_i = function () {
		var t = new eui.Group();
		this.skingroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 221;
		t.visible = true;
		t.width = 218;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.skin_img_i(),this.expire_img_i(),this.expireLabel_i()];
		return t;
	};
	_proto.skin_img_i = function () {
		var t = new eui.Image();
		this.skin_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "skinlist1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.expire_img_i = function () {
		var t = new eui.Image();
		this.expire_img = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "red_jiaobiao1";
		t.visible = true;
		t.x = 5;
		t.y = 5;
		return t;
	};
	_proto.expireLabel_i = function () {
		var t = new eui.Label();
		this.expireLabel = t;
		t.bold = true;
		t.rotation = -45;
		t.size = 35;
		t.text = "24H";
		t.textAlign = "center";
		t.visible = true;
		t.width = 89;
		t.x = 1;
		t.y = 62;
		return t;
	};
	return lotteryDataSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PointSkin.exml'] = window.Point = (function (_super) {
	__extends(Point, _super);
	function Point() {
		_super.call(this);
		this.skinParts = ["round_img","round_count"];
		
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this.round_img_i(),this.round_count_i()];
	}
	var _proto = Point.prototype;

	_proto.round_img_i = function () {
		var t = new eui.Image();
		this.round_img = t;
		t.bottom = 5;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "game_round_blue_png";
		t.width = 20;
		return t;
	};
	_proto.round_count_i = function () {
		var t = new eui.Label();
		this.round_count = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "20";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 29;
		return t;
	};
	return Point;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ranklistDataSkin.exml'] = window.ranklistDataSkin = (function (_super) {
	__extends(ranklistDataSkin, _super);
	function ranklistDataSkin() {
		_super.call(this);
		this.skinParts = ["rankbg","ranknumber1","ranknumber2","maskImg","headIcon","rankid","rankscore","number","rank_reward","Oversean_group","h5_ranknumber","h5_ranknumber1","h5_rankid","h5_rankscore","h5_number","h5_rank_reward","H5_group"];
		
		this.height = 105;
		this.width = 587;
		this.elementsContent = [this.rankbg_i(),this.Oversean_group_i(),this.H5_group_i()];
	}
	var _proto = ranklistDataSkin.prototype;

	_proto.rankbg_i = function () {
		var t = new eui.Image();
		this.rankbg = t;
		t.percentHeight = 100;
		t.source = "RankList_json.ranklistbg1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Oversean_group_i = function () {
		var t = new eui.Group();
		this.Oversean_group = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.rankid_i(),this.rankscore_i(),this.rank_reward_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 45;
		t.horizontalAlign = "left";
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.width = 88;
		t.x = 23;
		t.y = 4;
		t.elementsContent = [this.ranknumber1_i(),this.ranknumber2_i()];
		return t;
	};
	_proto.ranknumber1_i = function () {
		var t = new eui.Image();
		this.ranknumber1 = t;
		t.left = 0;
		t.source = "RankList_json.rank_one";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ranknumber2_i = function () {
		var t = new eui.Label();
		this.ranknumber2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 69;
		t.size = 40;
		t.text = "4";
		t.textAlign = "center";
		t.textColor = 0x7c4a0b;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 23;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 80;
		t.x = 120;
		t.y = -4;
		t.elementsContent = [this.maskImg_i(),this.headIcon_i(),this._Image1_i()];
		return t;
	};
	_proto.maskImg_i = function () {
		var t = new eui.Image();
		this.maskImg = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "RankList_json.mask";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.headIcon_i = function () {
		var t = new eui.Image();
		this.headIcon = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "RankList_json.headicon";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "RankList_json.borderImg";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.rankid_i = function () {
		var t = new eui.Label();
		this.rankid = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "123456789";
		t.textAlign = "center";
		t.textColor = 0x7c4a0b;
		t.width = 154;
		t.x = 263;
		t.y = 53;
		return t;
	};
	_proto.rankscore_i = function () {
		var t = new eui.BitmapLabel();
		this.rankscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "RankLabel_fnt";
		t.height = 31;
		t.text = "73200";
		t.width = 119;
		t.x = 241;
		t.y = 47;
		return t;
	};
	_proto.rank_reward_i = function () {
		var t = new eui.Group();
		this.rank_reward = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.visible = false;
		t.width = 90;
		t.x = 463;
		t.y = 8;
		t.elementsContent = [this._Image2_i(),this.number_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "egg_png";
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.number_i = function () {
		var t = new eui.BitmapLabel();
		this.number = t;
		t.anchorOffsetX = 0;
		t.font = "RankLabel_fnt";
		t.height = 26;
		t.left = 0;
		t.text = "1000";
		t.width = 99;
		t.y = 70;
		return t;
	};
	_proto.H5_group_i = function () {
		var t = new eui.Group();
		this.H5_group = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group3_i(),this.h5_rankid_i(),this.h5_rankscore_i(),this.h5_rank_reward_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "left";
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.width = 88;
		t.x = 23;
		t.y = 4;
		t.elementsContent = [this.h5_ranknumber_i(),this.h5_ranknumber1_i()];
		return t;
	};
	_proto.h5_ranknumber_i = function () {
		var t = new eui.Image();
		this.h5_ranknumber = t;
		t.left = 0;
		t.source = "RankList_json.rank_one";
		t.verticalCenter = 0;
		return t;
	};
	_proto.h5_ranknumber1_i = function () {
		var t = new eui.Label();
		this.h5_ranknumber1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 69;
		t.size = 40;
		t.text = "4";
		t.textAlign = "center";
		t.textColor = 0x7C4A0B;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 90;
		t.x = 0;
		t.y = 23;
		return t;
	};
	_proto.h5_rankid_i = function () {
		var t = new eui.Label();
		this.h5_rankid = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "123456789";
		t.textAlign = "center";
		t.textColor = 0x7C4A0B;
		t.width = 154;
		t.x = 263;
		t.y = 53;
		return t;
	};
	_proto.h5_rankscore_i = function () {
		var t = new eui.BitmapLabel();
		this.h5_rankscore = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "RankLabel_fnt";
		t.height = 31;
		t.text = "73200";
		t.width = 119;
		t.x = 241;
		t.y = 47;
		return t;
	};
	_proto.h5_rank_reward_i = function () {
		var t = new eui.Group();
		this.h5_rank_reward = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.width = 90;
		t.x = 463;
		t.y = 8;
		t.elementsContent = [this._Image3_i(),this.h5_number_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "egg_png";
		t.y = 20;
		return t;
	};
	_proto.h5_number_i = function () {
		var t = new eui.BitmapLabel();
		this.h5_number = t;
		t.anchorOffsetX = 0;
		t.font = "RankLabel_fnt";
		t.height = 26;
		t.horizontalCenter = 0;
		t.text = "1000";
		t.y = 70;
		return t;
	};
	return ranklistDataSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankListSkin.exml'] = window.RankListSkin = (function (_super) {
	__extends(RankListSkin, _super);
	var RankListSkin$Skin52 = 	(function (_super) {
		__extends(RankListSkin$Skin52, _super);
		function RankListSkin$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankListSkin$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "boxTap1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankListSkin$Skin52;
	})(eui.Skin);

	var RankListSkin$Skin53 = 	(function (_super) {
		__extends(RankListSkin$Skin53, _super);
		function RankListSkin$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankListSkin$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "boxTap2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankListSkin$Skin53;
	})(eui.Skin);

	var RankListSkin$Skin54 = 	(function (_super) {
		__extends(RankListSkin$Skin54, _super);
		function RankListSkin$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankListSkin$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "result_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			return t;
		};
		return RankListSkin$Skin54;
	})(eui.Skin);

	var RankListSkin$Skin55 = 	(function (_super) {
		__extends(RankListSkin$Skin55, _super);
		function RankListSkin$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankListSkin$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "result_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -5;
			return t;
		};
		return RankListSkin$Skin55;
	})(eui.Skin);

	var RankListSkin$Skin56 = 	(function (_super) {
		__extends(RankListSkin$Skin56, _super);
		function RankListSkin$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankListSkin$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "rank_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankListSkin$Skin56;
	})(eui.Skin);

	function RankListSkin() {
		_super.call(this);
		this.skinParts = ["classRank_btn","vs_btn","rank_type","geton_label1","geton_label2","maskimg","headIcon","borderImg","myid","myscore","number","myreward_group","myrank","Overseas_mylist","lab_rankTitle","rect","ranklist","scroller","rect1","ranklist0","scroller0","viewStack","wxrank_group","previous_btn","next_btn","wx_btn","backbtn","h5_geton_label1","h5_geton_label2","h5_myid","h5_myscore","h5_number","h5_myreward_group","h5_myrank","H5_mylist","H5_group","rank_scroll"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.rank_scroll_i()];
	}
	var _proto = RankListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "RankList_json.rankbg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.rank_scroll_i = function () {
		var t = new eui.Scroller();
		this.rank_scroll = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group10_i();
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Group7_i(),this.H5_group_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 70;
		t.x = 28;
		t.y = 50;
		t.elementsContent = [this._Image2_i(),this.rank_type_i(),this.Overseas_mylist_i(),this.lab_rankTitle_i(),this.viewStack_i(),this.wxrank_group_i(),this.wx_btn_i(),this.backbtn_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 857;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rankListBox_png";
		t.width = 694;
		t.x = 0;
		t.y = -10;
		return t;
	};
	_proto.rank_type_i = function () {
		var t = new eui.Group();
		this.rank_type = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.width = 607;
		t.x = 46;
		t.y = 84;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.classRank_btn_i(),this.vs_btn_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 38;
		t.horizontalAlign = "left";
		t.paddingBottom = 0;
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.classRank_btn_i = function () {
		var t = new XButton();
		this.classRank_btn = t;
		t.label = "经典模式";
		t.x = 22;
		t.y = 14;
		t.skinName = RankListSkin$Skin52;
		return t;
	};
	_proto.vs_btn_i = function () {
		var t = new XButton();
		this.vs_btn = t;
		t.anchorOffsetX = 137;
		t.anchorOffsetY = 73;
		t.label = "1v1";
		t.x = 22;
		t.y = 4;
		t.skinName = RankListSkin$Skin53;
		return t;
	};
	_proto.Overseas_mylist_i = function () {
		var t = new eui.Group();
		this.Overseas_mylist = t;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 704;
		t.x = 23;
		t.y = 850;
		t.elementsContent = [this._Image3_i(),this.myrank_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "RankList_json.rank_mylist";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.myrank_i = function () {
		var t = new eui.Group();
		this.myrank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.width = 619;
		t.x = 42;
		t.y = 29;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this.myid_i(),this.myscore_i(),this.myreward_group_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "center";
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 101;
		t.x = 16;
		t.y = 0;
		t.elementsContent = [this.geton_label1_i(),this.geton_label2_i()];
		return t;
	};
	_proto.geton_label1_i = function () {
		var t = new eui.Label();
		this.geton_label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x7E4D12;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.geton_label2_i = function () {
		var t = new eui.Image();
		this.geton_label2 = t;
		t.horizontalCenter = 0;
		t.source = "RankList_json.rank_one";
		t.visible = false;
		t.y = 20;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 80;
		t.x = 136;
		t.y = 2;
		t.elementsContent = [this.maskimg_i(),this.headIcon_i(),this.borderImg_i()];
		return t;
	};
	_proto.maskimg_i = function () {
		var t = new eui.Image();
		this.maskimg = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "RankList_json.mask";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.headIcon_i = function () {
		var t = new eui.Image();
		this.headIcon = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "RankList_json.headicon";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.borderImg_i = function () {
		var t = new eui.Image();
		this.borderImg = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.source = "RankList_json.borderImg";
		t.verticalCenter = 0;
		t.width = 80;
		return t;
	};
	_proto.myid_i = function () {
		var t = new eui.Label();
		this.myid = t;
		t.bold = true;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0x7E4D12;
		t.width = 150;
		t.x = 150;
		t.y = 40;
		return t;
	};
	_proto.myscore_i = function () {
		var t = new eui.BitmapLabel();
		this.myscore = t;
		t.anchorOffsetX = 0;
		t.font = "RankLabel_fnt";
		t.height = 30;
		t.text = "432222222";
		t.width = 150;
		t.x = 454;
		t.y = 40;
		return t;
	};
	_proto.myreward_group_i = function () {
		var t = new eui.Group();
		this.myreward_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.visible = false;
		t.width = 120;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.number_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "egg_png";
		t.x = 20;
		t.y = 15;
		return t;
	};
	_proto.number_i = function () {
		var t = new eui.BitmapLabel();
		this.number = t;
		t.anchorOffsetX = 0;
		t.font = "RankLabel_fnt";
		t.height = 31;
		t.text = "1000";
		t.width = 100;
		t.x = 20;
		t.y = 67;
		return t;
	};
	_proto.lab_rankTitle_i = function () {
		var t = new eui.Label();
		this.lab_rankTitle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 44;
		t.size = 25;
		t.text = "排行榜";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 158;
		t.x = 274;
		t.y = 17;
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.height = 622;
		t.selectedIndex = 1;
		t.width = 607;
		t.x = 46;
		t.y = 175;
		t.elementsContent = [this._Group4_i(),this._Group6_i()];
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rect_i(),this.scroller_i()];
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 622;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 607;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.ranklist_i()];
		return t;
	};
	_proto.ranklist_i = function () {
		var t = new eui.List();
		this.ranklist = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = ranklistDataSkin;
		t.left = 10;
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.y = 188;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingBottom = 0;
		t.paddingTop = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rect1_i(),this.scroller0_i()];
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller0_i = function () {
		var t = new eui.Scroller();
		this.scroller0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 622;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 607;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.ranklist0_i()];
		return t;
	};
	_proto.ranklist0_i = function () {
		var t = new eui.List();
		this.ranklist0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.itemRendererSkinName = ranklistDataSkin;
		t.left = 10;
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.y = 188;
		t.layout = this._VerticalLayout2_i();
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingBottom = 0;
		t.paddingTop = 0;
		t.verticalAlign = "top";
		return t;
	};
	_proto.wxrank_group_i = function () {
		var t = new eui.Group();
		this.wxrank_group = t;
		t.anchorOffsetY = 0;
		t.height = 829;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 610;
		t.x = 45;
		t.y = 175;
		return t;
	};
	_proto.wx_btn_i = function () {
		var t = new eui.Group();
		this.wx_btn = t;
		t.height = 85;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 1020;
		t.elementsContent = [this.previous_btn_i(),this.next_btn_i()];
		return t;
	};
	_proto.previous_btn_i = function () {
		var t = new XButton();
		this.previous_btn = t;
		t.label = "上一页";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = RankListSkin$Skin54;
		return t;
	};
	_proto.next_btn_i = function () {
		var t = new XButton();
		this.next_btn = t;
		t.label = "下一页";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 298;
		t.y = 0;
		t.skinName = RankListSkin$Skin55;
		return t;
	};
	_proto.backbtn_i = function () {
		var t = new XButton();
		this.backbtn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = -30;
		t.skinName = RankListSkin$Skin56;
		return t;
	};
	_proto.H5_group_i = function () {
		var t = new eui.Group();
		this.H5_group = t;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.top = 900;
		t.visible = false;
		t.percentWidth = 100;
		t.elementsContent = [this.H5_mylist_i(),this._Group9_i()];
		return t;
	};
	_proto.H5_mylist_i = function () {
		var t = new eui.Group();
		this.H5_mylist = t;
		t.anchorOffsetY = 0;
		t.height = 170;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 704;
		t.x = 23;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.h5_myrank_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "RankList_json.rank_mylist";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.h5_myrank_i = function () {
		var t = new eui.Group();
		this.h5_myrank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.width = 628;
		t.x = 42;
		t.y = 29;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Group8_i(),this.h5_myid_i(),this.h5_myscore_i(),this.h5_myreward_group_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 40;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.width = 101;
		t.x = 16;
		t.y = 0;
		t.elementsContent = [this.h5_geton_label1_i(),this.h5_geton_label2_i()];
		return t;
	};
	_proto.h5_geton_label1_i = function () {
		var t = new eui.Label();
		this.h5_geton_label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x7E4D12;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.h5_geton_label2_i = function () {
		var t = new eui.Image();
		this.h5_geton_label2 = t;
		t.horizontalCenter = 0;
		t.source = "RankList_json.rank_one";
		t.visible = false;
		t.y = 20;
		return t;
	};
	_proto.h5_myid_i = function () {
		var t = new eui.Label();
		this.h5_myid = t;
		t.bold = true;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0x7E4D12;
		t.width = 150;
		t.x = 150;
		t.y = 40;
		return t;
	};
	_proto.h5_myscore_i = function () {
		var t = new eui.BitmapLabel();
		this.h5_myscore = t;
		t.anchorOffsetX = 0;
		t.font = "RankLabel_fnt";
		t.height = 30;
		t.text = "0";
		t.width = 125;
		t.x = 454;
		t.y = 40;
		return t;
	};
	_proto.h5_myreward_group_i = function () {
		var t = new eui.Group();
		this.h5_myreward_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.width = 91;
		t.x = 510;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.h5_number_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "egg_png";
		t.y = 15;
		return t;
	};
	_proto.h5_number_i = function () {
		var t = new eui.BitmapLabel();
		this.h5_number = t;
		t.anchorOffsetX = 0;
		t.font = "RankLabel_fnt";
		t.height = 31;
		t.horizontalCenter = 0;
		t.text = "1000";
		t.y = 67;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 704;
		t.y = 180;
		t.elementsContent = [this._Image7_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "RankList_json.rank_title";
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 33;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "每日24点统计排名并发奖";
		t.textAlign = "center";
		t.textColor = 0xF8D464;
		t.verticalAlign = "middle";
		t.width = 576;
		t.y = 8;
		return t;
	};
	return RankListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ResultSkin.exml'] = window.ResultSkin.exml = (function (_super) {
	__extends(exml, _super);
	var exml$Skin57 = 	(function (_super) {
		__extends(exml$Skin57, _super);
		function exml$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = exml$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.source = "shuying03";
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.bold = true;
			t.left = 213;
			t.size = 90;
			t.stroke = 6;
			t.strokeColor = 0x006818;
			t.text = "CONTINUE";
			t.verticalCenter = 0;
			return t;
		};
		return exml$Skin57;
	})(eui.Skin);

	var exml$Skin58 = 	(function (_super) {
		__extends(exml$Skin58, _super);
		function exml$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = exml$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "result_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0.5;
			t.size = 35;
			t.text = "重新开始";
			t.verticalCenter = -4;
			return t;
		};
		return exml$Skin58;
	})(eui.Skin);

	var exml$Skin59 = 	(function (_super) {
		__extends(exml$Skin59, _super);
		function exml$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = exml$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_share_record_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 26.5;
			t.size = 35;
			t.text = "分享录屏";
			t.verticalCenter = -4;
			return t;
		};
		return exml$Skin59;
	})(eui.Skin);

	function exml() {
		_super.call(this);
		this.skinParts = ["result_img","result_title_img","run_number_text","result_diamond_img","dimond_img","number_label","relife_label","relive_group","replay_btn","lab_returnMain","back_Group","lab_friendHelp","share_Group","btn_group","back_label","back_Group1","back_group","btn_tt_returnMain","btn_tt_shareRecord","group_btn_tt_shareRecord","lab_rewardDiamondNum","group_shareReward","group_bottom_btn_tt"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group5_i(),this.group_bottom_btn_tt_i()];
	}
	var _proto = exml.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(13,13,3,1);
		t.source = "mask_bg_png";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.verticalCenter = 0;
		t.elementsContent = [this.result_img_i(),this._Image2_i(),this.result_title_img_i(),this.run_number_text_i(),this._Group3_i()];
		return t;
	};
	_proto.result_img_i = function () {
		var t = new eui.Image();
		this.result_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "all (83)";
		t.verticalCenter = 0;
		t.visible = true;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "all (75)";
		t.top = 0;
		return t;
	};
	_proto.result_title_img_i = function () {
		var t = new eui.Image();
		this.result_title_img = t;
		t.horizontalCenter = 0;
		t.source = "shuying02";
		t.top = 17;
		t.visible = true;
		return t;
	};
	_proto.run_number_text_i = function () {
		var t = new eui.Label();
		this.run_number_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 200;
		t.stroke = 10;
		t.text = "88888";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 870;
		t.y = 373;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 500;
		t.touchEnabled = false;
		t.verticalCenter = 240;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.relive_group_i(),this.replay_btn_i(),this.btn_group_i(),this.back_group_i()];
		return t;
	};
	_proto.relive_group_i = function () {
		var t = new eui.Group();
		this.relive_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.y = 294;
		t.elementsContent = [this.result_diamond_img_i(),this._Group1_i()];
		return t;
	};
	_proto.result_diamond_img_i = function () {
		var t = new eui.Image();
		this.result_diamond_img = t;
		t.source = "new_startbtn";
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.verticalCenter = 0;
		t.x = 63;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.dimond_img_i(),this.number_label_i(),this.relife_label_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 42.1;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.dimond_img_i = function () {
		var t = new eui.Image();
		this.dimond_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "diamond_1_png";
		return t;
	};
	_proto.number_label_i = function () {
		var t = new eui.BitmapLabel();
		this.number_label = t;
		t.anchorOffsetY = 0;
		t.font = "loginNumbers_fnt";
		t.text = "200";
		t.x = 380;
		t.y = 38;
		return t;
	};
	_proto.relife_label_i = function () {
		var t = new eui.Image();
		this.relife_label = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "result_live_png";
		t.verticalCenter = -5;
		t.x = 402;
		t.y = 34;
		return t;
	};
	_proto.replay_btn_i = function () {
		var t = new XButton();
		this.replay_btn = t;
		t.bottom = -31;
		t.horizontalCenter = 0;
		t.label = "Continue";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.skinName = exml$Skin57;
		return t;
	};
	_proto.btn_group_i = function () {
		var t = new eui.Group();
		this.btn_group = t;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 160;
		t.elementsContent = [this.back_Group_i(),this.share_Group_i()];
		return t;
	};
	_proto.back_Group_i = function () {
		var t = new eui.Group();
		this.back_Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.left = 60;
		t.width = 260;
		t.y = -1;
		t.elementsContent = [this._Image3_i(),this.lab_returnMain_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1.5;
		t.source = "result_btn_png";
		t.y = 8;
		return t;
	};
	_proto.lab_returnMain_i = function () {
		var t = new eui.Label();
		this.lab_returnMain = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.text = "返回首页";
		t.y = 29;
		return t;
	};
	_proto.share_Group_i = function () {
		var t = new eui.Group();
		this.share_Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.right = 60;
		t.width = 260;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Group2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "result_btn_png";
		t.y = 8;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 6.5;
		t.y = 17;
		t.elementsContent = [this._Image5_i(),this.lab_friendHelp_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.rotation = 360;
		t.source = "result_back_png";
		t.visible = false;
		t.width = 53;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab_friendHelp_i = function () {
		var t = new eui.Label();
		this.lab_friendHelp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 53;
		t.text = "分享复活";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 255;
		t.x = -10;
		t.y = 0;
		return t;
	};
	_proto.back_group_i = function () {
		var t = new eui.Group();
		this.back_group = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 564;
		t.elementsContent = [this.back_Group1_i()];
		return t;
	};
	_proto.back_Group1_i = function () {
		var t = new eui.Group();
		this.back_Group1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.back_label_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "shuying05";
		t.y = 8;
		return t;
	};
	_proto.back_label_i = function () {
		var t = new eui.Label();
		this.back_label = t;
		t.horizontalCenter = 0;
		t.text = "返回首頁";
		t.visible = false;
		t.y = 30;
		return t;
	};
	_proto.group_bottom_btn_tt_i = function () {
		var t = new eui.Group();
		this.group_bottom_btn_tt = t;
		t.percentHeight = 100;
		t.touchEnabled = false;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group8_i(),this.group_shareReward_i()];
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.x = 0;
		t.y = 870.08;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group7_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 128;
		t.y = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group6_i(),this.group_btn_tt_shareRecord_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 37;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 81;
		t.width = 257;
		t.x = 251;
		t.y = 231;
		t.elementsContent = [this.btn_tt_returnMain_i()];
		return t;
	};
	_proto.btn_tt_returnMain_i = function () {
		var t = new XButton();
		this.btn_tt_returnMain = t;
		t.label = "返回首页";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = exml$Skin58;
		return t;
	};
	_proto.group_btn_tt_shareRecord_i = function () {
		var t = new eui.Group();
		this.group_btn_tt_shareRecord = t;
		t.height = 81;
		t.width = 257;
		t.x = 261;
		t.y = 241;
		t.elementsContent = [this.btn_tt_shareRecord_i()];
		return t;
	};
	_proto.btn_tt_shareRecord_i = function () {
		var t = new XButton();
		this.btn_tt_shareRecord = t;
		t.label = "分享录屏";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.skinName = exml$Skin59;
		return t;
	};
	_proto.group_shareReward_i = function () {
		var t = new eui.Group();
		this.group_shareReward = t;
		t.height = 59;
		t.right = 5;
		t.visible = false;
		t.width = 182;
		t.y = 829.34;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Group11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tips_tt_pop_diamond_bg_png";
		t.x = -2.68;
		t.y = 2.66;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "title_tip_png";
		t.x = 96;
		t.y = 10.68;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 86;
		t.x = 5;
		t.y = 12.57;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Group10_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingRight = -11;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Group9_i(),this.lab_rewardDiamondNum_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "img_tt_plus_png";
		t.x = 0;
		t.y = 3.5;
		return t;
	};
	_proto.lab_rewardDiamondNum_i = function () {
		var t = new eui.BitmapLabel();
		this.lab_rewardDiamondNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "resultNumber_fnt";
		t.height = 48.83;
		t.letterSpacing = 5;
		t.scaleX = 0.6;
		t.scaleY = 0.4;
		t.text = "100";
		t.textAlign = "left";
		t.x = 4.87;
		t.y = 0;
		return t;
	};
	return exml;
})(eui.Skin);generateEUI.paths['resource/eui_skins/storeListDataSkin.exml'] = window.storeList = (function (_super) {
	__extends(storeList, _super);
	var storeList$Skin60 = 	(function (_super) {
		__extends(storeList$Skin60, _super);
		function storeList$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = storeList$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "StoreImg_json.bug_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = -4;
			return t;
		};
		return storeList$Skin60;
	})(eui.Skin);

	function storeList() {
		_super.call(this);
		this.skinParts = ["diamond_icon","buy_btn","diamond_number","time_label"];
		
		this.height = 130;
		this.width = 580;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = storeList.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.diamond_icon_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "StoreImg_json.store_box";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.diamond_icon_i = function () {
		var t = new eui.Image();
		this.diamond_icon = t;
		t.height = 74;
		t.left = 20;
		t.source = "allimages1_json.all (4)";
		t.verticalCenter = 0;
		t.width = 78;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.right = 10;
		t.width = 170;
		t.y = 0;
		t.elementsContent = [this.buy_btn_i()];
		return t;
	};
	_proto.buy_btn_i = function () {
		var t = new XButton();
		this.buy_btn = t;
		t.horizontalCenter = -1.5;
		t.label = "$0.99";
		t.verticalCenter = 0.5;
		t.skinName = storeList$Skin60;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 269;
		t.x = 129;
		t.y = 0;
		t.elementsContent = [this.diamond_number_i(),this.time_label_i()];
		return t;
	};
	_proto.diamond_number_i = function () {
		var t = new eui.Label();
		this.diamond_number = t;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "1000个钻石";
		t.textColor = 0x804d0e;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.time_label_i = function () {
		var t = new eui.Label();
		this.time_label = t;
		t.bold = true;
		t.bottom = 30;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "+NO ADS/周";
		t.textColor = 0x414141;
		t.visible = false;
		t.x = 0;
		return t;
	};
	return storeList;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TipsDemondSkin.exml'] = window.TipsDemondSkin = (function (_super) {
	__extends(TipsDemondSkin, _super);
	function TipsDemondSkin() {
		_super.call(this);
		this.skinParts = ["tip_img","number_label","demond_group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.demond_group_i()];
	}
	var _proto = TipsDemondSkin.prototype;

	_proto.demond_group_i = function () {
		var t = new eui.Group();
		this.demond_group = t;
		t.height = 130;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		t.y = 300;
		t.elementsContent = [this.tip_img_i(),this.number_label_i()];
		return t;
	};
	_proto.tip_img_i = function () {
		var t = new eui.Image();
		this.tip_img = t;
		t.height = 124;
		t.horizontalCenter = -50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages1_json.all (4)";
		t.verticalCenter = 0;
		t.width = 143;
		return t;
	};
	_proto.number_label_i = function () {
		var t = new eui.Label();
		this.number_label = t;
		t.horizontalCenter = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 59;
		t.stroke = 2;
		t.strokeColor = 0x005789;
		t.text = "+100";
		t.textColor = 0xffffff;
		t.verticalCenter = 10;
		t.y = 36;
		return t;
	};
	return TipsDemondSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TipsShare.exml'] = window.TipsShareSkin = (function (_super) {
	__extends(TipsShareSkin, _super);
	var TipsShareSkin$Skin61 = 	(function (_super) {
		__extends(TipsShareSkin$Skin61, _super);
		function TipsShareSkin$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TipsShareSkin$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_facebook_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TipsShareSkin$Skin61;
	})(eui.Skin);

	var TipsShareSkin$Skin62 = 	(function (_super) {
		__extends(TipsShareSkin$Skin62, _super);
		function TipsShareSkin$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TipsShareSkin$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "share_ins_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TipsShareSkin$Skin62;
	})(eui.Skin);

	function TipsShareSkin() {
		_super.call(this);
		this.skinParts = ["image_mask","btn_facebook","btn_instagram","group_share","tips_group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.tips_group_i()];
	}
	var _proto = TipsShareSkin.prototype;

	_proto.tips_group_i = function () {
		var t = new eui.Group();
		this.tips_group = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.image_mask_i(),this.group_share_i()];
		return t;
	};
	_proto.image_mask_i = function () {
		var t = new eui.Image();
		this.image_mask = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(14,11,4,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mask_bg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_share_i = function () {
		var t = new eui.Group();
		this.group_share = t;
		t.anchorOffsetX = 298;
		t.anchorOffsetY = 152;
		t.height = 304;
		t.width = 596;
		t.x = 362;
		t.y = 605;
		t.elementsContent = [this._Image1_i(),this.btn_facebook_i(),this.btn_instagram_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 304;
		t.scale9Grid = new egret.Rectangle(99,98,317,109);
		t.source = "allimages4_json.all (74)";
		t.width = 595;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_facebook_i = function () {
		var t = new XButton();
		this.btn_facebook = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 119;
		t.y = 69.5;
		t.skinName = TipsShareSkin$Skin61;
		return t;
	};
	_proto.btn_instagram_i = function () {
		var t = new XButton();
		this.btn_instagram = t;
		t.anchorOffsetX = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 347;
		t.y = 69.5;
		t.skinName = TipsShareSkin$Skin62;
		return t;
	};
	return TipsShareSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/tipsSkin.exml'] = window.tipsSkin = (function (_super) {
	__extends(tipsSkin, _super);
	function tipsSkin() {
		_super.call(this);
		this.skinParts = ["img_click","title_label","tiptitle_label","skin_img","getskin_group","diamond_label","diamond_img","getDiamond_group","tips_group","skinImg","lottery_group"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.img_click_i(),this.tips_group_i(),this.lottery_group_i()];
	}
	var _proto = tipsSkin.prototype;

	_proto.img_click_i = function () {
		var t = new eui.Image();
		this.img_click = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(12,12,3,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mask_bg_png";
		t.visible = true;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tips_group_i = function () {
		var t = new eui.Group();
		this.tips_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.verticalCenter = 0;
		t.visible = true;
		t.elementsContent = [this._Image1_i(),this.title_label_i(),this.getskin_group_i(),this.getDiamond_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 468;
		t.scale9Grid = new egret.Rectangle(477,304,17,189);
		t.source = "all (74)";
		t.visible = true;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_label_i = function () {
		var t = new eui.Label();
		this.title_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 60;
		t.stroke = 5;
		t.text = "观看视频,获得100钻石";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 789;
		return t;
	};
	_proto.getskin_group_i = function () {
		var t = new eui.Group();
		this.getskin_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143;
		t.horizontalCenter = 0;
		t.verticalCenter = 55;
		t.visible = false;
		t.width = 530;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.tiptitle_label_i(),this.skin_img_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.tiptitle_label_i = function () {
		var t = new eui.Label();
		this.tiptitle_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.size = 32;
		t.text = "累計觀看10次廣告獲得";
		t.textColor = 0x955247;
		t.verticalAlign = "middle";
		t.x = 45;
		t.y = 0;
		return t;
	};
	_proto.skin_img_i = function () {
		var t = new eui.Image();
		this.skin_img = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "skinlist3_png";
		t.x = 410;
		t.y = 35;
		return t;
	};
	_proto.getDiamond_group_i = function () {
		var t = new eui.Group();
		this.getDiamond_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 530;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.diamond_label_i(),this.diamond_img_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.diamond_label_i = function () {
		var t = new eui.Label();
		this.diamond_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.size = 70;
		t.stroke = 5;
		t.text = "+500";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.x = 45;
		t.y = 0;
		return t;
	};
	_proto.diamond_img_i = function () {
		var t = new eui.Image();
		this.diamond_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "diamond_1_png";
		t.x = 410;
		t.y = 35;
		return t;
	};
	_proto.lottery_group_i = function () {
		var t = new eui.Group();
		this.lottery_group = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.667;
		t.scaleY = 0.667;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Image2_i(),this.skinImg_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 468;
		t.source = "all (74)";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.skinImg_i = function () {
		var t = new eui.Image();
		this.skinImg = t;
		t.horizontalCenter = 0;
		t.source = "skin_head8_png";
		t.verticalCenter = 0;
		return t;
	};
	return tipsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TipsTouTiao.exml'] = window.TipsTouTiaoSkin = (function (_super) {
	__extends(TipsTouTiaoSkin, _super);
	function TipsTouTiaoSkin() {
		_super.call(this);
		this.skinParts = ["img_toutiao_bg","lab_toutiao_text","group_toutiao"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.group_toutiao_i()];
	}
	var _proto = TipsTouTiaoSkin.prototype;

	_proto.group_toutiao_i = function () {
		var t = new eui.Group();
		this.group_toutiao = t;
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.elementsContent = [this.img_toutiao_bg_i(),this.lab_toutiao_text_i()];
		return t;
	};
	_proto.img_toutiao_bg_i = function () {
		var t = new eui.Image();
		this.img_toutiao_bg = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 176;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(51,43,419,214);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "allimages4_json.all (74)";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 645;
		return t;
	};
	_proto.lab_toutiao_text_i = function () {
		var t = new eui.Label();
		this.lab_toutiao_text = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.size = 42;
		t.text = "录屏失败：录屏时长低于 3 秒";
		t.textAlign = "center";
		t.textColor = 0x565656;
		t.touchEnabled = false;
		t.verticalCenter = -4;
		return t;
	};
	return TipsTouTiaoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/XButton.exml'] = window.XButtonSkin = (function (_super) {
	__extends(XButtonSkin, _super);
	function XButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = XButtonSkin.prototype;

	return XButtonSkin;
})(eui.Skin);