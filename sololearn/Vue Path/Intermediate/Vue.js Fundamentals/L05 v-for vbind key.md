in Vue
to use v-for, we need a unique v-bind:key
<tr v-for="(robot, index) in cart" :key="index">
    <td>{{ robot.head.title }}</td>
    <td class="cost">{{ robot.cost }}</td>
</tr>