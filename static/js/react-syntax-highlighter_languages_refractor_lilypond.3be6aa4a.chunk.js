"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[925,3733],{1076:(e,r,n)=>{var t=n(2060);function a(e){e.register(t),function(e){for(var r=/\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source,n=0;n<5;n++)r=r.replace(/<expr>/g,(function(){return r}));r=r.replace(/<expr>/g,/[^\s\S]/.source);var t=e.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g,(function(){return r})),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:e.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};t["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=t,e.languages.ly=t}(e)}e.exports=a,a.displayName="lilypond",a.aliases=[]},2060:e=>{function r(e){!function(e){e.languages.scheme={comment:/;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},symbol:{pattern:/'[^()\[\]#'\s]+/,greedy:!0},char:{pattern:/#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,greedy:!0},"lambda-parameter":[{pattern:/((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,lookbehind:!0},{pattern:/((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/,lookbehind:!0}],keyword:{pattern:/((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|except|export|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,lookbehind:!0},builtin:{pattern:/((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,lookbehind:!0},operator:{pattern:/((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,lookbehind:!0},number:{pattern:RegExp(function(e){for(var r in e)e[r]=e[r].replace(/<[\w\s]+>/g,(function(r){return"(?:"+e[r].trim()+")"}));return e[r]}({"<ureal dec>":/\d+(?:\/\d+)|(?:\d+(?:\.\d*)?|\.\d+)(?:[esfdl][+-]?\d+)?/.source,"<real dec>":/[+-]?<ureal dec>|[+-](?:inf|nan)\.0/.source,"<imaginary dec>":/[+-](?:<ureal dec>|(?:inf|nan)\.0)?i/.source,"<complex dec>":/<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>/.source,"<num dec>":/(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>/.source,"<ureal box>":/[0-9a-f]+(?:\/[0-9a-f]+)?/.source,"<real box>":/[+-]?<ureal box>|[+-](?:inf|nan)\.0/.source,"<imaginary box>":/[+-](?:<ureal box>|(?:inf|nan)\.0)?i/.source,"<complex box>":/<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>/.source,"<num box>":/#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>/.source,"<number>":/(^|[()\[\]\s])(?:<num dec>|<num box>)(?=[()\[\]\s]|$)/.source}),"i"),lookbehind:!0},boolean:{pattern:/(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/,lookbehind:!0},function:{pattern:/((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/,lookbehind:!0},identifier:{pattern:/(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/,lookbehind:!0,greedy:!0},punctuation:/[()\[\]']/}}(e)}e.exports=r,r.displayName="scheme",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_lilypond.3be6aa4a.chunk.js.map