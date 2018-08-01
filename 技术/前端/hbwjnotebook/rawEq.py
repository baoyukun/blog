# Passby math formulas when GFM renders the post, they wait to be rendered by mathjax 
# Target static blog framework: Hexo
from re import sub

def repl(m):
    return '{%raw%}' + m.group() + '{%endraw%}'

mdFile = input()
with open(mdFile, 'r', encoding='utf-8') as f:
    s = f.read()
with open(mdFile, 'w', encoding='utf-8') as f:
    f.write(sub(r'\$\$?[^\$]+\$?\$', repl, s))