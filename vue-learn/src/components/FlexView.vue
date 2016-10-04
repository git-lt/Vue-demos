<template>
  <div class="p20 demo-flex">
    <h2>Flex 布局方案</h2>
    <p>更好，更简单的栅格系统</p>

    <h3>栅格系统</h3>
    <p>特点：</p>
    <ul>
      <li>每个栅格应同宽同高，平分空间</li>
      <li>可定义独立的栅格宽度，其它的栅格平分空间</li>
      <li>支持响应式布局</li>
      <li>支持垂直水平各方向对齐</li>
      <li>可以任意的嵌套</li>
      <li>可以自定义顺序</li>
    </ul>

    <h4>基础栅格系统</h4>
    <p>每项宽度相同，自然平分，高度默认都相同</p>
    <div class="box">
      <div class="flex flex-gutter">
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell"><div class="item">auto</div></div>
      </div>
      <div class="flex flex-gutter">
        <div class="cell"><div class="item">1/2</div></div>
        <div class="cell"><div class="item">1/2</div></div>
      </div>
      <div class="flex flex-gutter">
        <div class="cell"><div class="item">1/3</div></div>
        <div class="cell"><div class="item">1/3</div></div>
        <div class="cell"><div class="item">1/3</div></div>
      </div>
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell"><div class="item">1/4</div></div>
        <div class="cell"><div class="item">1/4</div></div>
        <div class="cell"><div class="item">1/4</div></div>
        <div class="cell"><div class="item">1/4</div></div>
      </div>
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell"><div class="item">1/5</div></div>
        <div class="cell"><div class="item">1/5</div></div>
        <div class="cell"><div class="item">1/5</div></div>
        <div class="cell"><div class="item">1/5</div></div>
        <div class="cell"><div class="item">1/5</div></div>
      </div>
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell"><div class="item">1/6</div></div>
        <div class="cell"><div class="item">1/6</div></div>
        <div class="cell"><div class="item">1/6</div></div>
        <div class="cell"><div class="item">1/6</div></div>
        <div class="cell"><div class="item">1/6</div></div>
        <div class="cell"><div class="item">1/6</div></div>
      </div>
      <div class="flex flex-cells flex-gutter">
        <div class="cell">
          <div class="item">即使只有一行字，高度也会与同级最大项的高度一致</div>
        </div>
        <div class="cell">
          <div class="item">
            每一行里的每一个栅格默认都是同宽同高。默认自适应。
            为了足够灵活，能够添加尺寸属性到单独的栅格中。
            没有添加的，仍然简单地平分剩下的可用空间。
            每一个栅格可以在纯直方向上置顶，置底，剧中。
          </div>
        </div>
      </div>
    </div>

    <h4>固定宽度和自适应宽度</h4>
    <p>相对的固定宽度与自适应宽度共存</p>
    <div class="box">
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell-1-2"><div class="item">1/2</div></div>
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell"><div class="item">auto</div></div>
      </div>
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell-1-3"><div class="item">1/3</div></div>
        <div class="cell"><div class="item">auto</div></div>
      </div>
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell-1-3"><div class="item">1/3</div></div>
        <div class="cell"><div class="item">auto</div></div>
        <div class="cell-1-4"><div class="item">1/4</div></div>
      </div>
      <div class="flex flex-direc-x flex-gutter">
        <div class="cell-1-3"><div class="item">1/3</div></div>
        <div class="cell"><div class="item">auto</div></div>
      </div>
    </div>

    <h4>响应式</h4>
    <p>响应式栅格系统通过添加媒体查询到栅格元素或栅格容器来实现。当满足媒体查询的条件时，栅格系统就能自动调整。</p>
    <p>在屏幕宽度小于768时，以100%的宽度展示，调整你的浏览器，查看效果。</p>
    <div class="box">
      <div class="flex flex-cell-full flex-gutter">
        <div class="cell"><div class="item">full/auto</div></div>
        <div class="cell"><div class="item">full/auto</div></div>
        <div class="cell"><div class="item">full/auto</div></div>
      </div>
    </div>

    <h4>对齐</h4>
    <div class="box">
      <h5>置顶对齐</h5>
      <div class="flex flex-gutter">
        <div class="cell"> <div class="item">置顶对齐</div></div>
        <div class="cell"> <div class="item">Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
        <div class="cell"> <div class="item">置顶对齐</div></div>
      </div>
      <h5>置底对齐</h5>
      <div class="flex flex-gutter flex-bottom-y">
        <div class="cell"> <div class="item">置底对齐</div></div>
        <div class="cell"> <div class="item">Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
        <div class="cell"> <div class="item">置底对齐</div></div>
      </div>
      <h5>居中对齐</h5>
      <div class="flex flex-gutter flex-center-y">
        <div class="cell"> <div class="item">居中对齐</div></div>
        <div class="cell"> <div class="item">Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
        <div class="cell"> <div class="item">居中对齐</div></div>
      </div>
      <h5>混合对齐</h5>
      <div class="flex flex-gutter">
        <div class="cell cell-start"> <div class="item">居顶对齐</div></div>
        <div class="cell cell-start"> <div class="item">Pellentesque sagittis vel erat ac laoreet. Phasellus ac aliquet enim, eu aliquet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div></div>
        <div class="cell cell-center"> <div class="item">居中对齐</div></div>
        <div class="cell cell-end"> <div class="item">居底对齐</div></div>
      </div>
      <div class="flex flex-gutter flex-left-x">
        <div class="cell-1-5"> <div class="item">居左对齐</div></div>
      </div>
      <div class="flex flex-gutter flex-center-x">
        <div class="cell-1-5"> <div class="item">居中对齐</div></div>
      </div>
      <div class="flex flex-gutter flex-right-x">
        <div class="cell-1-5"> <div class="item">居右对齐</div></div>
      </div>
      <h5>两端对齐</h5>
      <div class="flex flex-gutter flex-between-x">
        <div class="cell-1-5"> <div class="item">两端对齐</div></div>
        <div class="cell-1-5"> <div class="item">两端对齐</div></div>
        <div class="cell-1-5"> <div class="item">两端对齐</div></div>
      </div>
      <h5>分散对齐</h5>
      <div class="flex flex-gutter flex-around-x">
        <div class="cell-1-5"> <div class="item">分散对齐</div></div>
        <div class="cell-1-5"> <div class="item">分散对齐</div></div>
        <div class="cell-1-5"> <div class="item">分散对齐</div></div>
      </div>
    </div>

    <h4>栅格嵌套</h4>
    <div class="box">
      <p>栅格可以无限嵌套在另一个栅格中</p>
      <div class="flex flex-gutter">
        <div class="cell">
          <div class="item">
            <div class="flex flex-gutter">
              <div class="cell"><div class="item">1</div></div>
              <div class="cell">
                <div class="item">
                  <div class="flex flex-gutter">
                    <div class="cell"><div class="item">2</div></div>
                    <div class="cell"><div class="item">2</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cell-1-4"><div class="item">1/4</div></div>
      </div>
    </div>

    <h5>自定义顺序</h5>
    <div class="box">
      <div class="flex flex-gutter">
        <div class="cell cell-order5"><div class="item">1</div></div>
        <div class="cell cell-order3"><div class="item">2</div></div>
        <div class="cell cell-order2"><div class="item">3</div></div>
        <div class="cell cell-order1"><div class="item">4</div></div>
        <div class="cell cell-order4"><div class="item">5</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'FlexView'
}

</script>
