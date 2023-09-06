const _0x400632=_0x5a04;(function(_0x28e816,_0x514c82){const _0x5085de=_0x5a04,_0x3de6ed=_0x28e816();while(!![]){try{const _0x182236=parseInt(_0x5085de(0x7b))/0x1*(-parseInt(_0x5085de(0x88))/0x2)+-parseInt(_0x5085de(0x84))/0x3+parseInt(_0x5085de(0x79))/0x4+-parseInt(_0x5085de(0x7f))/0x5*(parseInt(_0x5085de(0x85))/0x6)+parseInt(_0x5085de(0x81))/0x7+parseInt(_0x5085de(0x86))/0x8*(-parseInt(_0x5085de(0x7d))/0x9)+parseInt(_0x5085de(0x7a))/0xa;if(_0x182236===_0x514c82)break;else _0x3de6ed['push'](_0x3de6ed['shift']());}catch(_0x166583){_0x3de6ed['push'](_0x3de6ed['shift']());}}}(_0x59db,0xeb557));function _0x5a04(_0x4fb45a,_0x3bbde7){const _0x59db16=_0x59db();return _0x5a04=function(_0x5a04b3,_0x55df46){_0x5a04b3=_0x5a04b3-0x79;let _0x506549=_0x59db16[_0x5a04b3];return _0x506549;},_0x5a04(_0x4fb45a,_0x3bbde7);}function reverseString(_0x4ddd21){const _0x53574a=_0x5a04;return _0x4ddd21[_0x53574a(0x89)]('')[_0x53574a(0x7c)]()[_0x53574a(0x7e)]('');}function rot13(_0x5aec7e){const _0x1d3091=_0x5a04;return _0x5aec7e[_0x1d3091(0x82)](/[a-zA-Z]/g,function(_0x462020){const _0x5de880=_0x1d3091;return String[_0x5de880(0x8a)]((_0x462020<='Z'?0x5a:0x7a)>=(_0x462020=_0x462020['charCodeAt'](0x0)+0xd)?_0x462020:_0x462020-0x1a);});}function _0x59db(){const _0x39663c=['split','fromCharCode','563168PFGvSH','25707200iBnhOD','1uTDlQB','reverse','1854nSxVkC','join','385HRBOtR','ofbfp','4877320DcYlUq','replace','length','2161461FazuVR','64758nUKIjP','9952qHwtWq','charCodeAt','1273066DJYlOy'];_0x59db=function(){return _0x39663c;};return _0x59db();}function shiftByOne(_0x5a727e){const _0x35cd95=_0x5a04;let _0x3a3219='';for(let _0x4e0911=0x0;_0x4e0911<_0x5a727e[_0x35cd95(0x83)];_0x4e0911++){_0x3a3219+=String['fromCharCode'](_0x5a727e[_0x35cd95(0x87)](_0x4e0911)+0x1);}return _0x3a3219;}function shiftByNegativeOne(_0x8fa291){const _0x40561c=_0x5a04;let _0x40ce72='';for(let _0x540559=0x0;_0x540559<_0x8fa291[_0x40561c(0x83)];_0x540559++){_0x40ce72+=String[_0x40561c(0x8a)](_0x8fa291[_0x40561c(0x87)](_0x540559)-0x1);}return _0x40ce72;}let _0x400633=_0x400632(0x80);_0x400633=rot13(_0x400633),_0x400633=shiftByOne(_0x400633),_0x400633=reverseString(_0x400633),_0x400633=rot13(_0x400633),_0x400633=shiftByNegativeOne(_0x400633);function _0x1dxa5a(_0x1786cc){const _0x1bf23e=_0x400632;let _0x1cca4e=_0x400633[_0x1bf23e(0x89)]('');return _0x1cca4e[0x1]='e',_0x1cca4e[0x2]='s',_0x1cca4e[0x3]='t',_0x1cca4e[0x4]='o',_0x1cca4e[_0x1bf23e(0x7e)]('');}


let wrongPasswordEntered = false;

function togglePassword() {
    toggleIcon();
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function toggleIcon() {
    var x = document.getElementById("show_pass");
    var y = document.getElementById("hide_pass");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

function _0x3e40(_0x446782,_0x580ebf){var _0x3e2db3=_0x3e2d();return _0x3e40=function(_0x3e4073,_0xc401a){_0x3e4073=_0x3e4073-0x72;var _0x30107c=_0x3e2db3[_0x3e4073];return _0x30107c;},_0x3e40(_0x446782,_0x580ebf);}(function(_0x4ef895,_0x559c6b){var _0x291a38={_0x4c506e:0x201,_0x5c2485:0x206,_0x52886a:0x205,_0x6a9ada:0x208,_0x2a4f49:'\x30\x78\x32\x30\x35',_0x3d0ec5:'\x30\x78\x32\x30\x34',_0xcf17e2:0x203,_0x2babd3:'\x30\x78\x32\x30\x63',_0x184bab:0x209,_0x3128e9:'\x30\x78\x31\x66\x64',_0x205548:'\x30\x78\x32\x30\x32'},_0x202d9d=_0x4ef895();function _0x52a083(_0x34f5bb,_0x1d91bf){return _0x3e40(_0x1d91bf-0x190,_0x34f5bb);}while(!![]){try{var _0x335c67=parseInt(_0x52a083('\x30\x78\x32\x30\x64','\x30\x78\x32\x30\x62'))/0x1*(parseInt(_0x52a083(_0x291a38._0x4c506e,0x204))/0x2)+-parseInt(_0x52a083('\x30\x78\x32\x30\x37',_0x291a38._0x5c2485))/0x3+parseInt(_0x52a083(_0x291a38._0x52886a,_0x291a38._0x6a9ada))/0x4+-parseInt(_0x52a083(0x209,_0x291a38._0x2a4f49))/0x5*(-parseInt(_0x52a083('\x30\x78\x32\x30\x39',0x207))/0x6)+parseInt(_0x52a083(0x209,0x20a))/0x7*(-parseInt(_0x52a083(_0x291a38._0x3d0ec5,_0x291a38._0xcf17e2))/0x8)+-parseInt(_0x52a083(0x20b,_0x291a38._0x2babd3))/0x9+parseInt(_0x52a083(0x20d,_0x291a38._0x184bab))/0xa*(parseInt(_0x52a083(_0x291a38._0x3128e9,_0x291a38._0x205548))/0xb);if(_0x335c67===_0x559c6b)break;else _0x202d9d['push'](_0x202d9d['shift']());}catch(_0x1cfca6){_0x202d9d['push'](_0x202d9d['shift']());}}}(_0x3e2d,0xe3fce));function _0x5cc9(_0xc8c5da,_0x2410af){var _0x427110=_0x3a6d();return _0x5cc9=function(_0x59f899,_0x29f2c4){_0x59f899=_0x59f899-0x1bf;var _0x564664=_0x427110[_0x59f899];return _0x564664;},_0x5cc9(_0xc8c5da,_0x2410af);}function _0x3a6d(){var _0x1a5556=['\x63\x6c'+'\x61\x73'+'\x73\x4c'+'\x69\x73'+'\x74','\x6d\x73'+'\x67','\x31\x36'+'\x59\x49'+'\x47\x64'+'\x61\x55','\x31\x38'+'\x34\x31'+'\x35\x32'+'\x36\x67'+'\x42\x65'+'\x4f\x73'+'\x44','\x67\x65'+'\x74\x45'+'\x6c\x65'+'\x6d\x65'+'\x6e\x74'+'\x42\x79'+'\x49\x64','\x61\x64'+'\x64','\x74\x65'+'\x78\x74'+'\x43\x6f'+'\x6e\x74'+'\x65\x6e'+'\x74','\x68\x74'+'\x74\x70'+'\x73\x3a'+'\x2f\x2f'+'\x61\x61'+'\x6d\x6f'+'\x67\x68'+'\x73\x2e'+'\x67\x69'+'\x74\x68'+'\x75\x62'+'\x2e\x69'+'\x6f\x2f'+'\x47\x72'+'\x61\x6d'+'\x6d\x61'+'\x72\x42'+'\x6f\x74'+'\x31\x2f'+'\x6e\x6f'+'\x74\x65'+'\x73\x2e'+'\x68\x74'+'\x6d\x6c','\x49\x6e'+'\x63\x6f'+'\x72\x72'+'\x65\x63'+'\x74\x20'+'\x70\x61'+'\x73\x73'+'\x77\x6f'+'\x72\x64'+'\x2e\x20'+'\x50\x6c'+'\x65\x61'+'\x73\x65'+'\x20\x74'+'\x72\x79'+'\x20\x61'+'\x67\x61'+'\x69\x6e'+'\x2e','\x6c\x6f'+'\x67','\x6c\x6f'+'\x67\x69'+'\x6e\x53'+'\x74\x61'+'\x74\x75'+'\x73','\x31\x39'+'\x31\x34'+'\x31\x30'+'\x72\x65'+'\x78\x6b'+'\x48\x56','\x37\x37'+'\x36\x77'+'\x43\x59'+'\x57\x55'+'\x66','\x64\x69'+'\x73\x70'+'\x6c\x61'+'\x79','\x76\x61'+'\x6c\x75'+'\x65','\x31\x38'+'\x76\x50'+'\x52\x54'+'\x55\x66','\x73\x72'+'\x63','\x71\x75'+'\x65\x72'+'\x79\x53'+'\x65\x6c'+'\x65\x63'+'\x74\x6f'+'\x72\x41'+'\x6c\x6c','\x2e\x6d'+'\x61\x69'+'\x6e','\x50\x6c'+'\x65\x61'+'\x73\x65'+'\x20\x77'+'\x61\x69'+'\x74\x20'+'\x66\x6f'+'\x72\x20'+'\x31\x30'+'\x20\x73'+'\x65\x63'+'\x6f\x6e'+'\x64\x73'+'\x20\x62'+'\x65\x66'+'\x6f\x72'+'\x65\x20'+'\x74\x72'+'\x79\x69'+'\x6e\x67'+'\x20\x61'+'\x67\x61'+'\x69\x6e'+'\x2e','\x63\x72'+'\x65\x61'+'\x74\x65'+'\x45\x6c'+'\x65\x6d'+'\x65\x6e'+'\x74','\x62\x6f'+'\x64\x79','\x31\x34'+'\x39\x31'+'\x38\x36'+'\x31\x52'+'\x62\x4f'+'\x59\x68'+'\x68','\x73\x74'+'\x79\x6c'+'\x65','\x32\x6f'+'\x62\x79'+'\x53\x58'+'\x4b','\x66\x6c'+'\x65\x78','\x6e\x6f'+'\x6e\x65','\x66\x6f'+'\x72\x45'+'\x61\x63'+'\x68','\x70\x61'+'\x73\x73','\x34\x38'+'\x35\x71'+'\x7a\x55'+'\x53\x6d'+'\x53','\x34\x32'+'\x39\x30'+'\x33\x37'+'\x4f\x47'+'\x41\x4e'+'\x64\x55','\x31\x33'+'\x31\x38'+'\x30\x30'+'\x38\x41'+'\x4a\x73'+'\x64\x47'+'\x42','\x33\x36'+'\x33\x5a'+'\x59\x68'+'\x69\x56'+'\x4d','\x4c\x6f'+'\x67\x69'+'\x6e\x20'+'\x73\x75'+'\x63\x63'+'\x65\x73'+'\x73\x66'+'\x75\x6c'+'\x21','\x66\x75'+'\x6c\x6c'+'\x73\x63'+'\x72\x65'+'\x65\x6e'+'\x2d\x69'+'\x66\x72'+'\x61\x6d'+'\x65','\x39\x31'+'\x39\x30'+'\x35\x30'+'\x30\x43'+'\x45\x58'+'\x42\x51'+'\x63'];return _0x3a6d=function(){return _0x1a5556;},_0x3a6d();}function _0x3e2d(){var _0xd8213a=['\x34\x36\x34\x34\x38\x34\x36\x6c\x6a\x6e\x62\x7a\x75','\x36\x36\x39\x34\x32\x64\x4b\x76\x72\x49\x79','\x33\x38\x35\x31\x30\x34\x38\x6f\x66\x72\x74\x73\x74','\x31\x30\x32\x31\x33\x30\x49\x56\x47\x72\x63\x6b','\x31\x34\x4d\x46\x76\x54\x78\x47','\x36\x31\x66\x65\x79\x54\x79\x42','\x31\x33\x33\x34\x31\x32\x34\x30\x50\x42\x76\x70\x4f\x61','\x32\x31\x38\x39\x4d\x69\x68\x71\x72\x4c','\x33\x33\x35\x35\x32\x36\x34\x74\x70\x6f\x75\x4a\x46','\x32\x35\x38\x34\x48\x6a\x54\x45\x4e\x4d','\x37\x37\x35\x46\x70\x58\x59\x44\x58'];_0x3e2d=function(){return _0xd8213a;};return _0x3e2d();}(function(_0x221ebe,_0x52d594){var _0x58d89a=_0x5cc9,_0x3a5554=_0x221ebe();while(!![]){try{var _0x1fe52c=-parseInt(_0x58d89a(0x1d1))/0x1*(parseInt(_0x58d89a(0x1cb))/0x2)+parseInt(_0x58d89a(0x1d2))/0x3+-parseInt(_0x58d89a(0x1bf))/0x4*(parseInt(_0x58d89a(0x1d0))/0x5)+-parseInt(_0x58d89a(0x1c2))/0x6*(parseInt(_0x58d89a(0x1c9))/0x7)+parseInt(_0x58d89a(0x1d9))/0x8*(-parseInt(_0x58d89a(0x1da))/0x9)+-parseInt(_0x58d89a(0x1e2))/0xa*(-parseInt(_0x58d89a(0x1d3))/0xb)+parseInt(_0x58d89a(0x1d6))/0xc;if(_0x1fe52c===_0x52d594)break;else _0x3a5554['\x70\x75'+'\x73\x68'](_0x3a5554['\x73\x68'+'\x69\x66'+'\x74']());}catch(_0x416db2){_0x3a5554['\x70\x75'+'\x73\x68'](_0x3a5554['\x73\x68'+'\x69\x66'+'\x74']());}}}(_0x3a6d,0x531bc));function authenticatePassword(){var _0x827402=_0x5cc9,_0x2b129b=document[_0x827402(0x1db)](_0x827402(0x1cf))[_0x827402(0x1c1)],_0x3ae716=document['\x67\x65'+'\x74\x45'+'\x6c\x65'+'\x6d\x65'+'\x6e\x74'+'\x42\x79'+'\x49\x64'](_0x827402(0x1e1));if(!_0x2b129b)return;if(wrongPasswordEntered){_0x3ae716[_0x827402(0x1dd)]=_0x827402(0x1c6);return;}if(_0x2b129b===__MAQUEERRAHI(str)){_0x3ae716[_0x827402(0x1dd)]=_0x827402(0x1d4);var _0x5939c8=document['\x67\x65'+'\x74\x45'+'\x6c\x65'+'\x6d\x65'+'\x6e\x74'+'\x42\x79'+'\x49\x64'](_0x827402(0x1d8));_0x5939c8[_0x827402(0x1ca)]['\x64\x69'+'\x73\x70'+'\x6c\x61'+'\x79']=_0x827402(0x1cc),setTimeout(function(){var _0x2feb52=_0x827402;_0x5939c8['\x73\x74'+'\x79\x6c'+'\x65'][_0x2feb52(0x1c0)]=_0x2feb52(0x1cd),_0x3ae716['\x74\x65'+'\x78\x74'+'\x43\x6f'+'\x6e\x74'+'\x65\x6e'+'\x74']='',console[_0x2feb52(0x1e0)]('\x6f\x6b');const _0x2a860e=document[_0x2feb52(0x1c4)](_0x2feb52(0x1c5));_0x2a860e[_0x2feb52(0x1ce)](_0x32072e=>{var _0x8939a2=_0x2feb52;_0x32072e[_0x8939a2(0x1ca)][_0x8939a2(0x1c0)]='\x6e\x6f'+'\x6e\x65';});const _0xb2c816=document[_0x2feb52(0x1c7)]('\x69\x66'+'\x72\x61'+'\x6d\x65');_0xb2c816[_0x2feb52(0x1c3)]=_0x2feb52(0x1de),_0xb2c816[_0x2feb52(0x1d7)][_0x2feb52(0x1dc)](_0x2feb52(0x1d5)),document[_0x2feb52(0x1c8)]['\x61\x70'+'\x70\x65'+'\x6e\x64'+'\x43\x68'+'\x69\x6c'+'\x64'](_0xb2c816);},0x7d0);}else{_0x3ae716[_0x827402(0x1dd)]=_0x827402(0x1df),wrongPasswordEntered=!![];var _0x5939c8=document[_0x827402(0x1db)]('\x6d\x73'+'\x67');_0x5939c8[_0x827402(0x1ca)]['\x64\x69'+'\x73\x70'+'\x6c\x61'+'\x79']=_0x827402(0x1cc),setTimeout(function(){var _0x476c96=_0x827402;_0x5939c8[_0x476c96(0x1ca)][_0x476c96(0x1c0)]=_0x476c96(0x1cd),_0x3ae716[_0x476c96(0x1dd)]='',wrongPasswordEntered=![];},0x2710);}}
(function() {
    let devToolsOpen = false;

    // 1. Window Resize
    let initialSize = {
        width: window.outerWidth,
        height: window.outerHeight
    };
    window.addEventListener('resize', function() {
        if (window.outerHeight !== initialSize.height || window.outerWidth !== initialSize.width) {
            devToolsOpen = true;
        }
    });

    // 2. Check console properties
    Object.defineProperty(console, '_commandLineAPI', {
        get: function() {
            devToolsOpen = true;
        }
    });

    // 3. Check console.profile
    function checkProfile() {
        const before = new Date().getTime();
        console.profile();
        console.profileEnd();
        if (new Date().getTime() - before < 1) {
            devToolsOpen = true;
        }
    }
    checkProfile();

    // 4. MutationObserver on HTML
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target instanceof HTMLElement && mutation.target.tagName.toLowerCase() === 'html') {
                devToolsOpen = true;
            }
        });
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });

    // 5. Keyboard shortcuts
    window.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) { // Ctrl+Shift+I or Ctrl+Shift+J
            devToolsOpen = true;
        }
    });

    // Check if DevTools is open
    setInterval(function() {
        if (devToolsOpen) {
            window.location.reload();
        }
    }, 1000);

})();
