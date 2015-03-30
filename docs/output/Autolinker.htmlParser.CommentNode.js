Ext.data.JsonP.Autolinker_htmlParser_CommentNode({"tagname":"class","name":"Autolinker.htmlParser.CommentNode","autodetected":{},"files":[{"filename":"CommentNode.js","href":"CommentNode.html#Autolinker-htmlParser-CommentNode"}],"extends":"Autolinker.htmlParser.HtmlNode","members":[{"name":"comment","tagname":"cfg","owner":"Autolinker.htmlParser.CommentNode","id":"cfg-comment","meta":{"required":true}},{"name":"text","tagname":"cfg","owner":"Autolinker.htmlParser.HtmlNode","id":"cfg-text","meta":{"required":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-constructor","meta":{}},{"name":"getComment","tagname":"method","owner":"Autolinker.htmlParser.CommentNode","id":"method-getComment","meta":{}},{"name":"getText","tagname":"method","owner":"Autolinker.htmlParser.HtmlNode","id":"method-getText","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.htmlParser.CommentNode","id":"method-getType","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.htmlParser.CommentNode","short_doc":"Represents an HTML comment node that has been parsed by the\nAutolinker.htmlParser.HtmlParser. ...","component":false,"superclasses":["Autolinker.htmlParser.HtmlNode"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='docClass'>Autolinker.htmlParser.HtmlNode</a><div class='subclass '><strong>Autolinker.htmlParser.CommentNode</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CommentNode.html#Autolinker-htmlParser-CommentNode' target='_blank'>CommentNode.js</a></div></pre><div class='doc-contents'><p>Represents an HTML comment node that has been parsed by the\n<a href=\"#!/api/Autolinker.htmlParser.HtmlParser\" rel=\"Autolinker.htmlParser.HtmlParser\" class=\"docClass\">Autolinker.htmlParser.HtmlParser</a>.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a>) for more\ndetails.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-comment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.CommentNode'>Autolinker.htmlParser.CommentNode</span><br/><a href='source/CommentNode.html#Autolinker-htmlParser-CommentNode-cfg-comment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.CommentNode-cfg-comment' class='name expandable'>comment</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The text inside the comment tag. ...</div><div class='long'><p>The text inside the comment tag. This text is stripped of any leading or\ntrailing whitespace.</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='cfg-text' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The original text that was matched for the HtmlNode. ...</div><div class='long'><p>The original text that was matched for the HtmlNode.</p>\n\n<ul>\n<li>In the case of an <a href=\"#!/api/Autolinker.htmlParser.ElementNode\" rel=\"Autolinker.htmlParser.ElementNode\" class=\"docClass\">ElementNode</a>,\nthis will be the tag's text.</li>\n<li>In the case of an <a href=\"#!/api/Autolinker.htmlParser.CommentNode\" rel=\"Autolinker.htmlParser.CommentNode\" class=\"docClass\">CommentNode</a>,\nthis will be the comment's text.</li>\n<li>In the case of a <a href=\"#!/api/Autolinker.htmlParser.TextNode\" rel=\"Autolinker.htmlParser.TextNode\" class=\"docClass\">TextNode</a>, this\nwill be the text itself.</li>\n<li>In the case of a <a href=\"#!/api/Autolinker.htmlParser.EntityNode\" rel=\"Autolinker.htmlParser.EntityNode\" class=\"docClass\">EntityNode</a>,\nthis will be the text of the HTML entity.</li>\n</ul>\n\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-constructor' class='name expandable'>Autolinker.htmlParser.CommentNode</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match instance,\nspecified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.htmlParser.HtmlNode\" rel=\"Autolinker.htmlParser.HtmlNode\" class=\"docClass\">Autolinker.htmlParser.HtmlNode</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.CommentNode'>Autolinker.htmlParser.CommentNode</span><br/><a href='source/CommentNode.html#Autolinker-htmlParser-CommentNode-method-getComment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.CommentNode-method-getComment' class='name expandable'>getComment</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the comment inside the comment tag. ...</div><div class='long'><p>Returns the comment inside the comment tag.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.htmlParser.HtmlNode' rel='Autolinker.htmlParser.HtmlNode' class='defined-in docClass'>Autolinker.htmlParser.HtmlNode</a><br/><a href='source/HtmlNode.html#Autolinker-htmlParser-HtmlNode-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.HtmlNode-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the text for the HtmlNode. ...</div><div class='long'><p>Retrieves the <a href=\"#!/api/Autolinker.htmlParser.HtmlNode-cfg-text\" rel=\"Autolinker.htmlParser.HtmlNode-cfg-text\" class=\"docClass\">text</a> for the HtmlNode.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.htmlParser.CommentNode'>Autolinker.htmlParser.CommentNode</span><br/><a href='source/CommentNode.html#Autolinker-htmlParser-CommentNode-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.htmlParser.CommentNode-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of node that this class represents. ...</div><div class='long'><p>Returns a string name for the type of node that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.htmlParser.HtmlNode-method-getType\" rel=\"Autolinker.htmlParser.HtmlNode-method-getType\" class=\"docClass\">Autolinker.htmlParser.HtmlNode.getType</a></p></div></div></div></div></div></div></div>","meta":{}});