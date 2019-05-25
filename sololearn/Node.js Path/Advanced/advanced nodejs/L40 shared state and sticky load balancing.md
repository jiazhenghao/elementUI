
                                        Child_Process1
User A,Session AX       Master    
                                        Child_Process2
1. use Redis or other db to store User A's session, the next time it comes, other childs can deal with it.
2. Master have the records, so User A always go to Child_Process1, the simple but last option.
can have many problems
