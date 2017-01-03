function Node(val){
	this.val = val;
	this.next = null;
}

const a = new Node(7);
const b = new Node(14);
const c = new Node(21);
const d = new Node(28);
const e = new Node(9);
const f = new Node(10)

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function swapEvenNodes(ll){
  let first = ll.next;
  let seeker = ll.next && ll.next.next && ll.next.next.next ? ll.next.next.next : false;
  while(first && seeker){
    let temp = seeker.val;
    seeker.val = first.val;
    first.val = temp;
    if (seeker.next && seeker.next.next){
      seeker = seeker.next.next;
      first = first.next.next;
    } else {
      return JSON.stringify(ll)
    }
  }
  return ll;
}

swapEvenNodes(a)
