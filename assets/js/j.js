var oAx;
var iScPs = jQuery(window).scrollTop(); 
//new WOW().init();
window.paceOptions={ ajax: { trackMethods:['GET','POST']}, restartOnRequestAfter: false };
jQuery.extend({
    _sRnd: function() {
        return Math.round(new Date().getTime()+(Math.random()*100));
    },
    _wRld: function() {
        //if( jQuery("#mdl").length ) { jQuery("#mdl").on("hidden.bs.modal", function(){ window.location.reload(); } ); }
        window.location.reload();
    },
    _msg: function( t, m ) {
        toastr.options = { positionClass: 'toast-bottom-right', onclick: null, closeButton:true, tapToDismiss:false, progressBar:true, showDuration:300, hideDuration:1000, timeOut:5000, extendedTimeOut:1000 };
        switch( t ) {
            case 's': { toastr.success(m); break; }
            case 'e': { toastr.error(m); break; }
            case 'w': { toastr.warning(m); break; }
            default: { toastr.info(m); }
        }
    },
    _rmQS: function( s ) {
        return s.split(/[?#]/)[0];
    },
    _uCde: function( s ) {
        return /[\u0080-\uFFFF]/.test(s);
    },
    _trNo: function( sTr ) {
        oB = '#'+( sTr ? sTr : 'Aj3R67ey3Pq49N1bEGxH5f9eP3k3478d' );
        if( jQuery( oB ).length ) { jQuery( oB ).remove(); }
    },
    _cfrm: function( oC ) {
        jQuery( ( (oC)? oC : '.fclr' ) ).parents('form').trigger('reset');
    },
    _efcs: function( oE, bS ) {
	   if( bS ) { jQuery('html,body').animate({scrollTop : 0}, 'slow'); }
	   setTimeout(function(){ jQuery(oE).focus(); }, 1 );
    },
    _clfm: function( oC, oE, bS, sTr ) {
        jQuery._trNo( sTr ); jQuery._cfrm( oC ); jQuery._efcs( oE, bS ); jQuery._rEdr();
        if( jQuery('.cbo').length   ) { jQuery('.cbo').prop('disabled', false).selectpicker('refresh'); }
        if( jQuery('.scntr').length ) { jQuery('.scntr').remove();              }
    },    
    _pgbar: function( oB, iI ) {
        var iC = 0;
        var oV = setInterval( function() {
            iC += 5;
            jQuery( oB ).css( 'width', iC + '%' ).attr( 'aria-valuenow', iC );
            if (iC >= 100) { clearInterval( oV ); }
        }, iI );
    },
    _cSmg: function( iLn, oCt, iA, iB, iC ) {
        if( iLn <= iA ){
            jQuery(oCt).html( iLn+' Chars / 1 Credit' ).removeClass('text-danger');
        } else {
            if (iLn <= iB) {
                var iCrd = parseInt( iLn / iA );
                if( iLn % iA != 0 ) { iCrd = iCrd + 1; }
                jQuery(oCt).html( iLn+' Chars / '+iCrd+' Credits' ).addClass('text-danger');
            } else {
                var iCrd = parseInt( iLn / iC );
                if( iLn % iC != 0 ) { iCrd = iCrd + 1; }
                jQuery(oCt).html( iLn+' Chars / '+iCrd+' Credits' ).addClass('text-danger');
            }
        }
    },
    _PstVl: function( sE, oX, oE ) {
        Pace.restart();
        jQuery('#'+ ( oE ? oE : 'mdl') ).modal('hide');
        var oP = jQuery('#'+sE);
        var sQ = 'fh='+oP.attr('data-fh')+'&fx='+oX;
        Pace.track(function(){
            oAx = jQuery.ajax({cache:false, global:true, url:'/', type:"post", data:sQ, dataType:'json'});
            oAx.done(function( res, tsts, jqXHR ) {
                var oFn = new Function( res.sc ); oFn();
                jQuery._msg( res.s, res.m );
            });
            oAx.fail(function(jqXHR, textStatus, errorThrown){ jQuery._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS003' ); });
            oAx.always(function() {});
        });
    },
    _tpBr: function( oR, oB ) {
        ar = jQuery.parseJSON( oR );
        jQuery('.ctpbr .c1').html(ar['flr']);
        jQuery('.ctpbr .c2').html(ar['xbn']);
        jQuery('.ctpbr .c3').html(ar['pgi']);
        if( !ar['flb'] ) {
            jQuery('.ftrblk').remove();
        } else {
            if( !jQuery('.ftrblk').length ) {
                jQuery('.ctpbr').after('<div class="ftrblk pb-3">'+ar['flb']+'</div>');
            } else {
                jQuery('.ftrblk').html(ar['flb']);        
            }
        }
        jQuery('#'+oB).html(ar['trs']);
    },
    _oRfh: function() {
        if( jQuery('.cbo').length ) {
            jQuery('.cbo').each(function() {
                if( jQuery(this).hasClass('nsrh') ) { jQuery(this).selectpicker(); } else { jQuery(this).selectpicker({ liveSearch:true }); }
            });
            jQuery('.cbo').on( 'loaded.bs.select', function( e, clickedIndex, isSelected, previousValue ) {
                jQuery('.bs-searchbox .form-control').addClass('form-control-sm');
            });
        }
        if( jQuery('.cedr').length ) {
            oEdr = jQuery('.cedr');
            oEdr.trumbowyg({ semantic: true, svgPath: false, hideButtonTexts: true, autogrow: true, btns: [ ['viewHTML'],['formatting'],['strong', 'em', 'del'],['superscript', 'subscript'],['link'],['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],['unorderedList', 'orderedList'],['foreColor', 'backColor'],['table'],['removeformat'],['fullscreen'] ] });
        }
    },
    _rEdr: function() {
        if( jQuery('.cedr').length ) { jQuery('.cedr').trumbowyg('empty'); }
    },
    _rMdl: function() {
        if( jQuery('.modal').length ) { 
            jQuery('.modal').slideUp( 'fast', function() { jQuery(this).remove(); } );
            jQuery('.modal-backdrop').fadeOut( 'slow', function(){ jQuery(this).remove(); } );
        }
    },
    _rMda: function( sM, sFx ) {
        sM = ( ( sM )? sM: 'Deleted!' );
        oE = jQuery('body').find('[data-elem="'+sFx+'"]');
        oE.addClass('mdda');
        oE.find('.mdamk').html(sM);
    },
    _vEml: function( sE ) {
        var sR = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return sR.test( sE );
    },
    _vTbx: function( oB ) {
        bS = true;
        oC = 'button[data-id="'+ oB.attr('id') +'"]';
        oB.removeClass( 'sus err' );
        jQuery( oC ).removeClass( 'sus err' );
        if( !oB.val() || oB.val() == oB.attr('data-placeholder') ) { bS = false; }
        if( bS && oB.hasClass('email') ) { bS = jQuery._vEml( oB.val() ); }        
        if( bS ) {
            if( oB.hasClass('cbo') ) { jQuery( oC ).addClass('sus'); }
            oB.addClass('sus');
        } else { 
            if( oB.hasClass('cbo') ) { jQuery( oC ).addClass('err'); }
            oB.addClass('err');
        }
        return bS;
    },
    _vFrm: function( oFi ) {
        var bEr = true;
        var bTm = true;
        jQuery( 'input', oFi ).each( function() {
            oB = jQuery(this);
            if( oB.attr('type') != 'hidden' ) {
                if( oB.hasClass('rq') ) {
                    bTm = jQuery._vTbx( oB );
                }
            }
            if( !bTm ) { bEr = false; }
        });
        jQuery( 'select', oFi ).each( function() {
            oB = jQuery(this);
            if( oB.hasClass('rq') ) { bTm = jQuery._vTbx( oB ); }
            if( !bTm ) { bEr = false; }
        });
        jQuery( 'textarea',oFi ).each(function() {
            oB = jQuery(this);
            if( oB.hasClass('rq') ) { bTm = jQuery._vTbx( oB ); }
            if( !bTm ) { bEr = false; }
        });
        return bEr;
    }
});
jQuery.fn.extend({
    _pAxF: function() {
        Pace.restart();
        var oF  = jQuery( this );
        var oCt = oF.find( 'input, select, button, textarea' );
        var oSr = oF.serialize(); 
        var oUr = oF.attr('action');
        oCt.prop( 'disabled', true );
        Pace.track(function(){
            oAx = jQuery.ajax({ cache: false, url: oUr, type: 'post', data: oSr, dataType: 'json', global: true });
            oAx.done( function( res, tsts, jqXHR ) {
                oF.find('input, textarea, select').removeClass('sus err');
                var oFn = new Function( res.sc ); oFn();
                jQuery._msg( res.s, res.m );
            });
            oAx.fail( function( jqXHR, textStatus, errorThrown ) { jQuery._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS001' ); });
            oAx.always(function() { oCt.prop( 'disabled', false ); });
        });
    },
    _pAxO: function( oV ) {
        Pace.restart();
        var oB = jQuery( this );
        var sQ = 'fh='+oV.fh+'&fx='+oV.fx+'&vl='+oV.vl;
        Pace.track(function(){
            oAx = jQuery.ajax({ cache: false, url: oB.attr('href'), type: 'post', data: sQ, dataType: 'json', global: true });
            oAx.done( function( res, tsts, jqXHR ) {
                var oFn = new Function( res.sc ); oFn();
                jQuery._msg( res.s, res.m );
            });
            oAx.fail( function( jqXHR, textStatus, errorThrown ) { jQuery._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS002' ); });
            oAx.always(function() {});
        });
    },
    _pAxMF: function() {
        Pace.restart();
        var oF  = jQuery( this );
        var oUr = oF.attr('action');
        var oCt = oF.find( 'input, select, button, textarea' );
        var oSr = new FormData( jQuery('#'+ oF.attr('id'))[0] );        
        oCt.prop( 'disabled', true );
        Pace.track(function(){
            oAx = jQuery.ajax({ cache: false, url: oUr, type: 'post', data: oSr, dataType: 'json', contentType: false, processData: false, global: true });
            oAx.done( function( res, tsts, jqXHR ) {
                oF.find('input, textarea, select').removeClass('sus err');
                var oFn = new Function( res.sc ); oFn();
                jQuery._msg( res.s, res.m );
            });
            oAx.fail( function( jqXHR, textStatus, errorThrown ) { jQuery._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS002' ); });
            oAx.always(function() { oCt.prop( 'disabled', false ); oF.find( '.dsabl' ).prop( 'disabled', true ); });
        });
    }
});

!function(o){o.extend({
    g11:function(n){return $('#'+n)},
    g61:function(){return $(window).width()},
    g62:function(){return $(window).height()}
}) }(jQuery);

!function(o){
    o.fn.f51 =function(i){var n=o.extend({b:"576",c:"d2stk"},i),t=o(this),c=o.g61(),w=o(window);w.on("resize",function(){c=o.g61()}),w.on("scroll",function(){c<=n.b||0==n.b?t.stick_in_parent({sticky_class:n.c}):n.b&&t.trigger("sticky_kit:detach")})},
    o.fn.mdl =function(i){var t='',eH=' data-backdrop="static" data-keyboard="false"';var n=$.extend({id:'mdl',fx:'',fas:'',fade:1,center:0,size:'md',title:'',content:'',remove:1,eschide:0,alert:0,parentid:''},i);var d=o.g11(n.id);if(d.length&&n.remove){d.remove();}if(n.alert){t='<div class="modal-footer"><button id="prxdl" type="button" class="btn btn-success btn-sm ft-500 pr-3"><i class="fas fa-check fa-wh mr-2"></i> Yes</button><button type="button" class="btn btn-outline-secondary btn-sm ml-3 pr-3" data-dismiss="modal"><i class="fas fa-times mr-2"></i>No</button></div>'; }$("body").append('<div class="modal'+(n.fade?" fade":"")+'" id="'+n.id+'"'+(n.eschide?"":eH)+' role="dialog" aria-labelledby="'+n.id+'tte" aria-hidden="true"><div class="modal-dialog modal-'+n.size+(n.center?" modal-dialog-centered":"")+'" role="document"><div class="modal-content shadow-lg"><div class="modal-header"><h5 class="modal-title" id="'+n.id+'ttl">'+n.title+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+n.content+"</div>"+t+"</div></div></div>");var d=o.g11(n.id);if(n.alert){d.modal('show').one('click','#prxdl',function(e){$._PstVl(n.parentid,n.fx,n.id);e.preventDefault();});}else{d.modal('show');}}
}(jQuery);

!function(o){
    var v1;
    o('a').hover(function(){t=o(this);v1=t.attr("title");t.removeAttr("title")},function(){o(this).attr("title",v1),v1=""});
    o(document).on('click','a[href="#"]',function(e){e.preventDefault();});
    o(document).on('keydown', 'form :input:not(textarea)',function(e){ if(e.keyCode == 13){ e.preventDefault(); var oE = o('form :input'); o(oE).eq(oE.index(this) + 1).focus();}}).on('keypress keyup', 'form :input:not(textarea)',function(e){ if(e.keyCode == 13){ e.preventDefault(); }});
	o('body').on('input propertychange paste', '.f1a0u', function() {
		var oP = o(this).parents('.f1a0');
		oP.find('.f1a0r').html( oP.find('.f1a0v').val() * o(this).val() );
    });
    o('body').on('click','.g310 .bt', function(e) {
        var oP = o(this).parents('.g310');
		var oE = oP.find('.el').clone().html(function(i,h) { return h.replace(/_rnd_/g, jQuery._sRnd()); });
        oE.removeClass('d-none el');
		oE.find('.bootstrap-select').replaceWith(function() { return o('select', this); });
		oE.find('.cbo').selectpicker('render'); 
		oE.insertBefore(oP);
    });
    if( o('.g110').length ) { o('body').on('change','.g110 input[type="checkbox"]', function() {
        var oP = o(this).parents('.g110');
        oP.find('input[type="checkbox"]').not(this).prop('checked', false);
        var oE = oP.find('input[type="checkbox"]:checked');
        var oH = oP.find('input[type="hidden"]');
        if(oE){ oH.val(oE.val()); }else{ oH.val('-1'); }
    }); }
	o('body').on('change','.g11a01 input[type="radio"]', function() {
        var oE = o(this);
		var oC = o('.'+ oE.parents('.g11a01').data('elc') );
        oC.removeClass('d-none').hide();
		if( oE.parents('.g11a01').data('rst') == 1 ) { oC.find('select').val(0).selectpicker('refresh'); }
		o('#'+ oE.data('eli') ).show();
    });
	o('body').on('click','.g11a02 .g11a02b', function() {
        var oE = o(this);
		o('.g11a02 .g11a02b' ).removeClass('active');
		o(this).addClass('active');
		o('.' + oE.data( 'el1' ) ).removeClass('d-none');
		o('.' + oE.data( 'el2' ) ).addClass('d-none');
    });
}(jQuery);

(function( oJ, oW ) {
    oJ._oRfh();
    if( oJ.isFunction(oJ.fn.fancybox) ) {
        oJ('[data-fancybox]').fancybox({ protect: true, loop: true, hash: false, animationEffect: 'zoom-in-out', transitionEffect: 'zoom-in-out' })
    }
    oJ('body').on('focus change', '.dte', function(){
        oJ(this).datepicker({autoclose:true,disableTouchKeyboard:true,todayHighlight:true,leftArrow:'<i class="fas fa-angle-double-left"></i>',rightArrow: '<i class="fas fa-angle-double-right"></i>'});
    });
    oJ('body').on('focus change', '.nos', function(){
        oJ(this).keyup(function(){if(this.value!=this.value.replace(/[^0-9.]/g,'')){this.value=this.value.replace(/[^0-9.]/g,'');}});
    });
    oJ('body').on('click', '.btflpg', function(e) { oJ('.dvflpg').toggleClass('stflpg'); e.preventDefault() });
    oJ('body').on('click', '.slchk', function(e) { var obj = oJ(this).find('input[type="checkbox"]'); obj.prop("checked", !obj.is(":checked")); }); 
    oJ('body').on('click', '.jb2pb', function(e){
        var oP = oJ(this).parents('.jb2pd');
        if( jQuery._vFrm( oP ) ) {
            var fx = ( (oJ(this).data('efx')) ? oJ( oJ(this).data('efx') ).data('fx') : '' );
            var sQ = '?fx='+ ( (fx) ? fx : oP.data('fx') );
			var sU = oP.data('url');
            oJ.each(oJ(this).data('element').split(','), function(i, v) { sQ+= '&'+ v +'='+ oP.find('#'+v).val(); });
            window.location.href = ( sU ? sU : window.location.href.split('?')[0] )+sQ;
        } else {
			oJ._msg( 'w', 'Mandatory fields cannot be left blank' );
		}
    });
    oJ('body').on('change', 'select.jc2lc', function(e){
        var oE = oJ(this);
        var oB = oJ('.jc2lp');
        var oD = oE.data('ld');
        if( oE.val() ) {
            Pace.restart();
            oB.prop( 'disabled', true );
            Pace.track(function(){
                oAx = jQuery.ajax({ cache: false, url:window.location.href.split('?')[0], type: 'get', data: 'fx='+oE.data('fx')+'&ot='+oE.val(), global: true });
                oAx.done( function(r,t,x) {
                    oE.removeClass('sus err');
                    if(oD) { oJ('#'+oD).html(r).removeClass('d-none'); } else {
                        var oFn = new Function( r ); oFn();
                    }
                    oJ._oRfh();
                });
                oAx.fail(function(jqXHR, textStatus, errorThrown){ oJ._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS022' ); });
                oAx.always(function() { oB.prop( 'disabled', false ); });
            });
        } else {
			oJ._msg( 'w', 'Mandatory fields cannot be left blank' );
		}
        e.preventDefault();
    });
    oJ('body').tooltip({ selector: '[data-toggle="tooltip"]' });
    if( oJ('.scrlt').length ) {
        oJ('body').on('click', '.scrlt', function(e){ e.preventDefault(); oJ('html,body').animate( { scrollTop:0 }, 'slow'); });
        if( oJ(oW).scrollTop()> 100 ){ oJ('.scrlt').show(); }
        oJ(oW).scroll(function(){ if( oJ(this).scrollTop()> 100 ){ oJ('.scrlt').fadeIn(); } else { oJ('.scrlt').fadeOut(); }});
    }
    if( oJ('.fixtop').length ) { oJ(oW).scroll(function(){ 
        oE = oJ('.fixtop');
        if( oJ(oW).scrollTop() > iScPs ) { oE.removeClass('sticky-top'); } else{ if( !oE.hasClass('sticky-top')) { oE.addClass('sticky-top'); } }
        iScPs = oJ(oW).scrollTop();
    }); }
    oJ('.table-responsive').on('shown.bs.dropdown', function(e) {
        var t = oJ(this), m = oJ(e.target).find('.dropdown-menu'), tb = t.offset().top + t.height(), mb = m.offset().top + m.outerHeight(true), d = 5;
        if (t[0].scrollWidth > t.innerWidth()) {
            if (mb + d > tb) { t.css('padding-bottom', ((mb + d) - tb)); }
        } else {
            t.css('overflow', 'visible');
        }
    }).on('hidden.bs.dropdown', function () { oJ(this).css({'padding-bottom': '', 'overflow': ''}); });
    if( oJ('input, textarea, select').length ) {
        oJ('textarea').each( function() { autosize(this); } ).on( 'autosize:resized', function(){ } );        
		oJ('input, textarea, select').each( function() {
			oJ(this).focus( function(){ oJ(this).removeClass('sus err'); });
			oJ(this).blur( function() { oJ(this).removeClass('sus err'); });
		});
        
        oJ('body').on('change keyup input', 'input[maxlength], textarea[maxlength], .ecntr', function() {
            oE = oJ(this);
            sCt = oE.attr('id')+'_cntr';
            oCt = '#'+sCt;
            sUi = oE.attr('id')+'_uni';
            oUi = '#'+sUi;
            iMx = oE.attr('maxlength');
            if(oE.val() != null) { iIV = parseInt( oE.val().length ); } else { iIV = 0; }
            if( oE.hasClass('ecmp') ) {
                for( var iI=0; iI<iIV; iI++ ) {
                    if( oE.val().charAt(iI) == "\n" ) { iIV = parseInt(iIV) + 1; }
                }
            }
            if( !oE.hasClass('nocnt') ) {
                if( oE.hasClass('escd') ) {
                    oE.parent().find('.suni').remove();
                    if( oJ._uCde( oE.val() ) ) {
                        jQuery._cSmg( iIV, oCt, 70, 67, 67 );
                    } else {
                        jQuery._cSmg( iIV, oCt, 160, 306, 153 );
                    }
                }
                if(!oE.parent().find('.scntr').length) {
                    oE.after('<span class="scntr form-text" id="'+sCt+'"></span>');
                    oCt = oE.parent().find('.scntr');
                } else {
                    oCt = oE.parent().find('.scntr');
                }
                if(iIV < iMx){
                    oJ(oCt).html(iIV+' chars').removeClass('text-danger');
                } else if(iIV == iMx) {
                    oJ(oCt).html( iIV+' chars' ).addClass('text-danger');
                } else if(iIV > iMx) {
                    oE.val(oE.val().substring(0, iMx));
                }
            }
            if( !oE.hasClass('nouni') ) {
                if(!oE.parent().find('.suni').length) {
                    oE.after('<span class="suni form-text text-danger" id="'+sUi+'"></span>');
                    oUi = oE.parent().find('.suni');
                } else {
                    oUi = oE.parent().find('.suni');
                }
                if( oJ._uCde( oE.val() ) ) {
                    oJ(oUi).html('Unicode found!');
                } else {
                    oJ(oUi).remove();
                }
            }
            if( iIV <= 0 ) {
                oJ(oCt).remove(); oJ(oUi).remove();
            }
        });
    }
    
    oJ(document).on('click', '.scrf', function(e){ 
        dt = new Date();
        oB = oJ('.scim').find('img');
        oB.attr( 'src', oJ._rmQS( oB.attr('src') ) +'?'+ dt.getTime() );
        e.preventDefault();
    });

    oJ(document).on('click', '.elpd span', function(e){
        var oE = oJ( this );
        var oB = oE.parents('.elpd');
        var sC =  oB.find('i').attr('class');
        if( oB.hasClass('show') ) {
            oB.find('i').attr('class', sC.replace('eye', 'eye-slash') );
            oB.find('input').attr('type', 'password');
        } else {
            oB.find('i').attr('class', sC.replace('-slash', '') );
            oB.find('input').attr('type', 'text');
        }
        oB.toggleClass('show');
        e.preventDefault();
    });

    oJ(document).on('submit', '.paxf', function(e) {
		var oF = oJ( this );
		if( jQuery._vFrm( oF ) ) {
			if( oAx ) { oAx.abort(); }
			if( oF.hasClass('mdafm') ) {
                oF._pAxMF();
			} else {
				oF._pAxF();
			}
		} else {
			oJ._msg( 'w', 'Mandatory fields cannot be left blank' );
		}
		return false;
	});
    
    oJ('body').on('click', '.mdl', function(e){
        Pace.restart();
        var oB = oJ( this );
        var sT = ( ( oB.attr('data-title') ) ? oB.attr('data-title') : oJ('#pgttl').html() );
        Pace.track(function(){
            oAx = oJ.ajax({url: oB.attr('href'), cache: false});
            oAx.done(function(r,t,x) { oB.mdl({ title: sT, content: r, center:( ( oB.hasClass('mdl-center1') )?true:false ) }); oJ._oRfh(); });
            oAx.fail(function(jqXHR, textStatus, errorThrown){ oJ._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS002-'+oB.attr('data-cref') ); });
            oAx.always(function() {});
        });
		e.preventDefault();
	});

    oJ('body').on('click', '.mddl, .mdla', function(e){
        var oB  = oJ( this );
        var sMs = '';
        if( oB.attr('data-name') ) {
            sMs = oB.attr('data-msg');
            sTx = oB.attr('data-name');
            iPrId = oB.parents('div').attr('id');
        } else {
            sTx = oB.parents('tr').attr('data-name');
            iPrId = oB.parents('table').attr('id');
            sMs = oB.parents('table').attr('data-msg');
        }
        oB.mdl({ id: 'mdlbx', fx: oB.attr('data-fx'), title: oJ('#pgttl').html(), content: '<div class=\"px-3 pt-3\">Are you sure to '+ (sMs?sMs:'delete') +'? <br><strong>'+ sTx +'</strong></div>', center:false, alert:true, parentid:iPrId });
		e.preventDefault();
	});
    
    oJ('body').on('click', '.imdl', function(e){
        var oB = oJ( this );    
        oB.mdl({ title: oB.attr('data-title'), content: '<div class=\"px-3 pt-3 text-center\"><img src=\"'+ oB.attr('href') +'\" class=\"mw-100\"></div>', center:( ( oB.hasClass('mdl-center1') )?true:false ) });
		e.preventDefault();
	});

    oJ('body').on('click', '.ctpbr .page-link, .ftrblk a', function(e){
        var oB = oJ( this );
        var oP = oJ('.ctpbr');
        var sP = ( ( oB.data('element') ) ? oJ('#'+ oB.data('element') ).val() : '' );
        if( oB.attr('href') != '#' ) {
            Pace.restart();
            Pace.track(function(){
                oAx = oJ.ajax({url: oB.attr('href') + sP +'&fx='+ oP.attr('data-fx')});
                oAx.done(function(r,t,x) { jQuery._tpBr( r, oP.attr('data-block') ); });
                oAx.fail(function(jqXHR, textStatus, errorThrown){ oJ._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS002-'+oB.attr('data-cref') ); });
                oAx.always(function() {});
            });
        }
		e.preventDefault();
	});

    oJ(document).on('submit', '.ctpbr .elftr', function(e) {
		Pace.restart();
        var oF  = oJ( this );
        var oCt = oF.find( 'input, select, button, textarea' );
        var oSr = oF.serialize(); 
        var oUr = oF.attr('action');
        oCt.prop( 'disabled', true );
        Pace.track(function(){
            oAx = jQuery.ajax({ cache: false, url: oUr, type: 'get', data: oSr+'&fx='+jQuery('.ctpbr').attr('data-fx'), global: true });
            oAx.done( function(r,t,x) {
                oF.find('input, textarea, select').removeClass('sus err');
                jQuery._tpBr( r, jQuery('.ctpbr').attr('data-block') );
            });
            oAx.fail(function(jqXHR, textStatus, errorThrown){ oJ._msg( 'e', 'Unknown error occurred!<br>Error Code: EJS002-'+oB.attr('data-cref') ); });
            oAx.always(function() { oCt.prop( 'disabled', false ); });
        });
        e.preventDefault();
	});
    
    if( oJ('.fe01a').length ) { oJ('body').on('change', '.fe01a', function(e){ oB = oJ(this); oP = oB.parents('tr'); if( oB.is(':checked') ) { oP.addClass( 'bk-green' ); } else { oP.removeClass( 'bk-green' ); } }); }
    
    if( oJ('.esrts').length ) {
        Sortable.create(esrt, {
            animation: 100, group: 'list-1', draggable: '.list-group-item', handle: '.list-group-item', sort: true, chosenClass: 'active'
        });
    }    

})(jQuery, window);