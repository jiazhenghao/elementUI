192:nodejs jiazhenghao$ node -v
v12.2.0
192:nodejs jiazhenghao$ node -p "process.versions.v8"
7.4.288.21-node.17

V8 Feature Groups
Shipping    Staged  In Progress
            --harmony

192:nodejs jiazhenghao$ node --v8-options | grep "in progress"
  --harmony-class-fields (enable "harmony fields in class literals" (in progress))
  --harmony-private-methods (enable "harmony private methods in class literals" (in progress))
  --harmony-regexp-sequence (enable "RegExp Unicode sequence properties" (in progress))
  --harmony-weak-refs (enable "harmony weak references" (in progress))
  --harmony-intl-bigint (enable "BigInt.prototype.toLocaleString" (in progress))
  --harmony-intl-datetime-style (enable "dateStyle timeStyle for DateTimeFormat" (in progress))

node
v8
v8.getHeapStatistics()
{
  total_heap_size: 6324224,
  total_heap_size_executable: 1048576,
  total_physical_size: 3118072,
  total_available_size: 2195067512,
  used_heap_size: 2926704,
  heap_size_limit: 2197815296,
  malloced_memory: 8192,
  peak_malloced_memory: 918824,
  does_zap_garbage: 0
}
