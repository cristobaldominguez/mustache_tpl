<script type="text/template" id="tpl01">
	{{#person}}
	<div class="itemTemplateWrapper">
		<img src="{{img}}" alt="{{name.first}} {{name.last}}">
		<p><strong>{{name.first}} {{name.last}}</strong></p>
		<p>{{profession}}</p>
		<p class="txt">{{info}}</p>
	</div>
	{{/person}}
</script>