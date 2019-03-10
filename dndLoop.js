function getObject(tempRwData, drgArr) {
    var result = null;
    //var drgArr = [0,1,0,0,0]; length = 5

    for(var i = 0; i < drgArr.length; i++) {
            if(i != drgArr.length-1) {     
                var n = tempRwData.children[drgArr[i]];
                drgArr.shift();
                result = getObject(n, drgArr);
            } else {
                tempRwData.children[drgArr[i]].children = [{"hello":"hi"}];
                console.log(tempRwData.children[drgArr[i]]);
                console.log(tempRwData.children[drgArr[i]].title);
                console.log(tempRwData.children[drgArr[i]].id);
                console.log(tempRowData);
                result = tempRwData.children[drgArr[i]];
            }
        
        }
return result;
}

function show(t) {
    return t;
}

$(function() {
    tempRowData = {
        'title': 'some title',
        'channel_id':'123we',
        'children': [
            {
                'channel_id':'abc',
                'id':'id_0',
                'title':'All-Inclusive0',
                'children': [{
                        'channel_id':'dsa2',
                        'title':'Some Recommends00',
                        'id':'id_0_0',
                        'children': [{
                                'image':'http://www.asdasd.com',
                                'title':'Sandals000',
                                'id':'id_0_0_0',
                         }]
                        },
                        {
                        'channel_id':'dsa3',
                        'title':'Some Recommends01',
                        'id':'id_0_1',
                        'children': [{
                                'image':'http://www.badasd.com',
                                'title':'Boots010',
                                'id':'id_0_1_0',
                                'children': [{
                                    'image':'http://www.badasd.com',
                                    'title':'Boots0100',
                                    'id':'id_0_1_0_0',
                                    'children': [{
                                            'image':'http://www.badHElloooooasd.com',
                                            'title':'Boots01000',
                                            'id':'id_0_1_0_0_0',
                                    }]
                                }]
                         }]
                }]
            },
            {
                'channel_id':'xyz22',
                'title':'All-Inclusive1',
                'id':'id_1',
                'children': [{
                        'channel_id':'dsa22',
                        'title':'Some Recommends10',
                        'id':'id_1_0',
                        'children': [{
                                'image':'http://www.asdasd.com',
                                'title':'Sandals100',
                                'id':'id_1_0_0',
                         }]
                        },
                        {
                        'channel_id':'dsa322',
                        'title':'Some Recommends11',
                        'id':'id_1_1',
                        'children': [{
                                'image':'http://www.badasd.com',
                                'title':'Boots110',
                                'id':'id_1_1_0',
                         }]
                }]
            }
      ]
  };
  
  var drgArr = [0,1,0,0,0];
  var result = getObject(tempRowData, drgArr);

    if(result != null) {
        $('#result').html('Found object: <br /> Boots110 -->' );
        
            $('#result').html($('#result').html() + result.id + ': ' + result.title + '<br />');
        
    }
    else {
        $('#result').html('Not Found.');
    }   
});
