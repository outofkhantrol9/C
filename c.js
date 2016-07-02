function C(b,e){var a={},d=[e.p[0]-b.p[0],e.p[1]-b.p[1]],c=d[0]*d[0]+d[1]*d[1],f=b.r+e.r;if(c>=f*f)return a;c=Math.sqrt(c);0===c?(a.p=b.r,a.n=[1,0],a.c=[b.p]):(a.p=f-c,a.n=[d[0]/c,d[1]/c],a.c=[[a.n[0]*(b.p[0]+b.r),a.n[1]*(b.p[1]+b.r)]]);return a}

