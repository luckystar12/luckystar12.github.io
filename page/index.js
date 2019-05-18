class WorksList extends React.Component {
  renderItem(item) {
    return (
      <li>
        <div class='row mb-3 timeline-date'>{item.date}</div>
        <div class='row mb-3' dangerouslySetInnerHTML={{__html: item.title}} />
        <div class='row mb-3'>{item.content}</div>
        <div class='row mb-3 responsibility'>{item.responsibility}</div>
        <div class='row mb-3 images'>
          {item.images.map(img => this.renderImg(img))}
        </div>
      </li>
    )
  }
  renderImg(img) {
    return (
      <img class={img.type === 'horizon' ? 'horizon-img mb-3' : 'vertical-img mb-3'} src={img.url} />
    )
  }
  render() {
    let worksData = this.props.worksData
    return (
      <ul class="timeline">
        {
          worksData.map(item => this.renderItem(item))
        }
      </ul>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div class="container mt-4 mt-md-5 mb-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h4 class="title mb-4 mb-md-5">luckystar12 作品集</h4>
            <h6 class="company mb-2 mb-md-3">广州爱范儿科技股份有限公司（2018.1-至今）</h6>
            <WorksList worksData={window.worksData}/>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('app')
);
